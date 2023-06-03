const fs = require('fs')
const path = require('path')

const readAudioStream = (prompt) => {
  const filePath = path.join(__dirname, `/audios/${prompt}.m4a`)
  return fs.createReadStream(filePath)
}

module.exports = readAudioStream
