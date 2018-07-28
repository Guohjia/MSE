import Box from '../box'
import Stream from '../stream'

Box.hdlr = function () {
  let stream = new Stream(this.data)
  this.version = stream.readUint8()
  this.flag = Stream.readByte(stream.dataview, 3)
  stream.skip(4)
  this.handleType = `${String.fromCharCode(stream.readUint8())}${String.fromCharCode(stream.readUint8())}${String.fromCharCode(stream.readUint8())}${String.fromCharCode(stream.readUint8())}`
  stream.skip(12)
  let name = []
  while (stream.position < this.size - 8) {
    name.push(String.fromCharCode(stream.readUint8()))
  }
  this.name = name.join('')
  delete this.subBox
  delete this.data
  stream = null
}
