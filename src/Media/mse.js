import Task from './task';
import MP4 from './FMP4';
class MSE {
    constructor(options) {
        this._mimeCodec = options.mimeCodec;
        this._video = options.video;
        this._url = options.url;
        this.sourceOpen = this.sourceOpen.bind(this);
        this.appendBuffer = this.appendBuffer.bind(this);

        this.init();
        this.toFMP4();
    }

    toFMP4(){
        let mp4 = new MP4('./MP4file/240_test.mp4');
        mp4.once('moovReady',() => {
            console.log('ready');
            console.log(mp4.packMeta())
        })
        console.log(mp4.packMeta())
        console.log(mp4);
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
                //在数据请求完成后，我们需要调用 endOfStream()。它会改变 MediaSource.readyState 为 ended 并且触发 sourceended 事件。
                this._mediaSource.endOfStream();
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
