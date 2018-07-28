import Box from '../box'

Box.MP4DecSpecificDescrTag = function (stream) {
  let box = new Box()
  let size, dataSize
  box.type = stream.readUint8()
  size = stream.readUint8()
  if (size === 0x80) {
    box.extend = true
    stream.skip(2)
    size = stream.readUint8() + 5
    dataSize = size - 5
  } else {
    dataSize = size
    size += 2
  }
  box.size = size
  let EScode = []
  for (let i = 0; i < dataSize; i++) {
    EScode.push(Number(stream.readUint8()).toString(16).padStart(2, '0'))
  }
  box.EScode = EScode
  delete box.subBox
  return box
}
