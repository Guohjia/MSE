import Task from './task';
import EventEmitter from 'event-emitter';
// import MP4 from './FMP4';
class MSE {
    constructor(options) {
        this._state = options.state;

        this._mimeCodec = this._state.getState('mimeCodec');
        this._video = this._state.getState('video');
        this._url = this._state.getState('url');
        this._bufferLimited = this._state.getState('bufferLimited');

        this.sourceOpen = this.sourceOpen.bind(this);
        this.appendBuffer = this.appendBuffer.bind(this);
        this.endOfStream = this.endOfStream.bind(this);
        
        EventEmitter(this);
        this.on('loadData',finish =>{
            this._task.emit('loadData',finish);
            if( finish ) { this._loadFinsh = finish;}
        });

        this.bufferQueue = [];
        this._loadFinsh = false;
        this.init();
    }

    init() {
        if ('MediaSource' in window && MediaSource.isTypeSupported(this._mimeCodec)) {
            this._mediaSource = new MediaSource();
            this._video.src = URL.createObjectURL(this._mediaSource);
            this._mediaSource.addEventListener('sourceopen', this.sourceOpen);
        } else {
            console.error('Unsupported MIME type or codec: ', this._mimeCodec);
        }
    }

    sourceOpen() {
        this._sourceBuffer = this._mediaSource.addSourceBuffer(this._mimeCodec);
        this._task = new Task({
            state:this._state,
            callback:this.appendBuffer
        });
        this._sourceBuffer.addEventListener('updateend', () =>  {
            if( this._loadFinsh ) { this.endOfStream();}
            let buffer = this.bufferQueue.shift();
            if (buffer) {
                // console.log('切换清晰度,添加新的Buffer')
                this._sourceBuffer.appendBuffer(buffer);
            }
        });
    }

    appendBuffer(buffer) {
        let sourceBuffer =this._sourceBuffer;
        if (sourceBuffer.updating === false && this.state === 'open') {
            sourceBuffer.appendBuffer(buffer)
            return true
        } else {
            this.bufferQueue.push(buffer)
            return false
        }
    }

    removeBuffer (start, end) {
        console.log('切换清晰度,remove原来的Buffer')
        this.sourceBuffer.remove(start, end)
      }
    
    endOfStream () {
        //在数据请求完成后，我们需要调用 endOfStream()。
        //它会改变 MediaSource.readyState 为 ended 并且触发 sourceended 事件。
        if (this.state === 'open') {
            this._mediaSource.endOfStream();
        }
    }

    get state () {
        return this._mediaSource.readyState
    }

    get duration () {
        return this._mediaSource.duration
    }

    set duration (value) {
        this._mediaSource.duration = value
    }
}


export default MSE;
