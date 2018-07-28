import Box from './box'
import Concat from 'concat-typed-array'
import Stream from './stream'

//注释:解析响应的Array Buffer => ?? Stream??box??
/**ArrayBuffer对象代表储存二进制数据的一段内存，它不能直接读写，只能通过视图（TypedArray视图和DataView视图)来读写，视图的作用是以指定格式解读二进制数据
 * 视图读取数据，用TypedArray视图中的Uint8Array读取上述数据
 * ArrayBuffer对象、TypedArray对象、DataView对象是JavaScript操作二进制数据的一个接口,[关于上述底层二进制数据交换说明](http://javascript.ruanyifeng.com/stdlib/arraybuffer.html)
 * 
 */
class Parse {
  constructor (buffer) {
    // console.log(buffer)
    this.buffer = null
    this.boxes = []
    this.nextBox = null
    this.start = 0
    let self = this
    if (self.buffer) {
      // console.log(self.buffer)
      Concat(Uint8Array, self.buffer, buffer) //切换成Uint8Array开始读取数据???
      // console.log(Uint8Array)
    } else {
      // console.log(buffer)
      self.buffer = buffer
    }
    let bufferLength = buffer.byteLength  //字节长度
    buffer.position = 0
    let stream = new Stream(buffer)
    while (bufferLength - stream.position >= 8) {
      let box = new Box()
      box.readHeader(stream)
      if (box.size - 8 <= (bufferLength - stream.position)) {
        box.readBody(stream)
        self.boxes.push(box)
      } else {
        if (box.type === 'mdat') {
          box.readBody(stream)
          self.boxes.push(box)
        } else {
          self.nextBox = box
          stream.position -= 8
          break
        }
      }
    }
    self.buffer = new Uint8Array(self.buffer.slice(stream.position))
  }
}

export default Parse
