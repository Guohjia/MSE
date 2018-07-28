import Box from '../box'
import Stream from '../stream'
Box['url '] = function () {
  let stream = new Stream(this.data)
  this.version = stream.readUint8()
  this.flag = [stream.readUint8(), stream.readUint8(), stream.readUint8()]
  let location = []; let length = stream.buffer.byteLength
  while (stream.position < length) {
    location.push(stream.readUint8())
  }
  this.location = location
  delete this.subBox
  delete this.data
  stream = null
}
