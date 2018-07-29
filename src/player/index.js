import MSE from '../Media/mse';
import EventEmitter from 'event-emitter';
import State from './state';

class Player{
    constructor(options){
        this._url = options.url;
        this._video = options.video;
        this._mimeCodec = options.mimeCodec;
        this._bufferLimited = options.bufferLimited;
        this._state = new State(options);

        this.onTimeUpdate = this.onTimeUpdate.bind(this);
        this.onProgress = this.onProgress.bind(this);

        this._video.addEventListener('timeupdate', this.onTimeUpdate);
        this._video.addEventListener('progress', this.onProgress);
        
        EventEmitter(this);
        this._loaded = 0; //已缓冲数据
        this._loading = false; //是否正在缓冲标志,控制缓冲准确性
        this.init();
    }
    
    init(){
        this._MSE = new MSE({
            state:this._state
        });
    }

    onTimeUpdate(){
        if( this._video.duration - this._loaded <= 0 || this._loading ){return;} //缓冲完毕
        if( this._video.duration - this._loaded < this._bufferLimited ){ //再做一次缓冲就好了
            this._loading = true;
            this._MSE.emit('loadData',true); //布尔给出缓冲是否要结束的标志
            return;
        }
        if ( this._loaded > 0 &&this._loaded - this._video.currentTime < 2 ) {
            this._loading = true;
            this._MSE.emit('loadData');
        }
    }

    onProgress(){
        let buffered = this._video.buffered,
            time = this._video.currentTime
        for(let i = 0; i < buffered.length; ++i) {
            if (time >= buffered.start(i) && time < buffered.end(i)) {
                this._loaded = buffered.end(i);
                break;
            }
        }
        //感觉就算控制每次缓冲的字节大小一样，依然可能因为缓冲的是视频不同段，
        //换成的时间也不一样，很难做到百分百精确吧，稍有误差
        console.log('[media] progress', this._loaded)
        console.log(this._video.duration)
        if(!this._state.getState('duration')) {
            this._state.setState({'duration':this._video.duration})
        }
        this._loading = false;
    }
}


export default  Player;