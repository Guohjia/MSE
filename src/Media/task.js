import EventEmitter from 'event-emitter';
import State from '../player/state';

/**
 * [constructor 构造函数参数options]
 * @param {String} url [原播放地址]
 * @param {Function} callback [请求后的回调函数]
**/

class Task{
  constructor(options){
    EventEmitter(this);
    this._state = options.state;

    this._fetchUrl = this._state.getState('url');
    this._bufferLimited = this._state.getState('bufferLimited');
    this._taskCallback = options.callback;

    this.on('loadData',this.fetchData.bind(this));

    this._initByte = 1000000; //第一次请求的区间 =>这个暂不抽离
    this._postionByte = 0//记下当前字节 
    this.fetchData();
  }

  fetchData(finish = false,ranges = `bytes=${this._postionByte}-${(this._postionByte+this._initByte)}` ){
    //如果不考虑缓冲控制和无缝清晰度切换是否依然必须要FMP4呢？
    //也就是FMP4是在range请求后还是请求前，它和range分块请求是否有着必然联系，貌似普通FMP4都播不出来，range请求可以成功
    let sectionByte = this._state.getState('sectionByte');
    if( sectionByte ){ ranges = `bytes=${this._postionByte}-${(this._postionByte+sectionByte)}`}
    if( finish ){ ranges = `bytes=${this._postionByte}-`;this.off('loadData',this.fetchData)};
    fetch(this._fetchUrl,{
      headers: { range: ranges}
    }).then( response => {
      if(!this._state.getState('byteTotal')){
        //获取视频总字节数
        let byteTotal = response.headers.get('Content-Range').split('/')[1];
        this._state.setState({'byteTotal':Math.floor(+byteTotal)})
      }
      return response.arrayBuffer();
    }).then( arrayBuffer => {
      this._postionByte += arrayBuffer.byteLength;
      this._taskCallback(arrayBuffer);
    })
  }
}


export default Task;

