const axios = require('axios')

const getAudioStream = async (audioUrl) => {
  const audioResponse = await axios.get(audioUrl, { responseType: 'stream' })
  return audioResponse.data
}

module.exports = getAudioStream
