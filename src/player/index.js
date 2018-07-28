import MSE from '../Media/mse';

class Player{
    constructor(options){
        this._url = options.url;
        this._video = options.video;
        this._mimeCodec = options.mimeCodec;

       this.init();
    }
    
    init(){
        this._MSE = new MSE({
            url:this._url,
            video:this._video,
            mimeCodec:this._mimeCodec
        });
    }
}


export default  Player;