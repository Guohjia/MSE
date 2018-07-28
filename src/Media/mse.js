import Task from './task';

class MSE {
    constructor(options) {
        this._mimeCodec = options.mimeCodec;
        this._video = options.video;
        this._url = options.url;
        this.sourceOpen = this.sourceOpen.bind(this);
        this.appendBuffer = this.appendBuffer.bind(this);

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
        new Task({
            url:this._url,
            callback:this.appendBuffer
        });
    }

    appendBuffer(buf) {
        this._sourceBuffer.addEventListener('updateend', () =>  {
            // console.log(buf)
            if (!this._sourceBuffer.updating && this.state === 'open') {
                this._mediaSource.endOfStream();  //表示流的结束，但为啥一定要end
                this._video.play().then(()=>{
                    console.log('成功播放咯')
                }).catch( err => {
                    console.log('.js-log-mp4', err)
                });
            }
        });
        this._sourceBuffer.appendBuffer(buf);
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
