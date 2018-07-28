import EventEmitter from 'event-emitter';
// import Errors from '../error'

class MSE {
  constructor (codecs = 'video/mp4; codecs="avc1.64001E, mp4a.40.5"') { //视频音频的编码方式
    let self = this/ 
    EventEmitter(this)
    this.codecs = codecs
    this.mediaSource = new window.MediaSource()
    this.url = window.URL.createObjectURL(this.mediaSource)
    this.queue = []
    this.updating = false
    this.mediaSource.addEventListener('sourceopen', function () {
      self.sourceBuffer = self.mediaSource.addSourceBuffer(self.codecs)
      self.sourceBuffer.addEventListener('error', function (e) {
        self.emit('error', new Errors('mse', '', {line: 16, handle: '[MSE] constructor sourceopen', msg: e.message}))
      })
      self.sourceBuffer.addEventListener('updateend', function (e) {
        self.emit('updateend')
        let buffer = self.queue.shift()
        if (buffer) {
          // console.log('切换清晰度,添加新的Buffer')
          // console.log(buffer)
          self.sourceBuffer.appendBuffer(buffer)
        }
      })
      self.emit('sourceopen')
    })
    this.mediaSource.addEventListener('sourceclose', function () {
      self.emit('sourceclose')
    })
  }

  get state () {
    return this.mediaSource.readyState
  }

  get duration () {
    return this.mediaSource.duration
  }

  set duration (value) {
    this.mediaSource.duration = value
  }

  appendBuffer (buffer) {
    let sourceBuffer = this.sourceBuffer
    if (sourceBuffer.updating === false && this.state === 'open') {
      sourceBuffer.appendBuffer(buffer)
      return true
    } else {
      this.queue.push(buffer)
      return false
    }
  }

  removeBuffer (start, end) {
    console.log('切换清晰度,remove原来的Buffer')
    this.sourceBuffer.remove(start, end)
  }

  endOfStream () {
    if (this.state === 'open') {
      this.mediaSource.endOfStream()
    }
  }

  static isSupported (codecs) {
    return window.MediaSource && window.MediaSource.isTypeSupported(codecs)
  }
}

export default MSE
