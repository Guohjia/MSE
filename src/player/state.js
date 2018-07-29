import EventEmitter from 'event-emitter'; 

/**
 * [State 播放器参数控制]
 *  @param {String} section 
 */
class State{
    constructor(options){
        EventEmitter(this);

        this.setState = this.setState.bind(this);
        this.getState = this.getState.bind(this);

        this.on('setState',this.setState);
        this.on('getState',this.getState);
        
        this.setState(options)
    }
    
    setState(state){
       Object.assign(this,state);
       if( this.byteTotal && this.duration ) {
           let sectionByte = this.bufferLimited / this.duration * this.byteTotal;
           this.sectionByte = Math.floor(sectionByte);
           console.log(this.sectionByte)
       }
    }

    getState(key){
        return this[key]
    }
}

export default State