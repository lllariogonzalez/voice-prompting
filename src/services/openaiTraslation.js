const openaiClient = require('../config/openaiConfig')

async function voiceTranslate (file) {
  try {
    const translation = await openaiClient.createTranscription(file, 'whisper-1')
    return translation.data.text
  } catch (error) {
    console.error(error.message)
    throw new Error('Ha ocurrido un error al intentar trascribir el audio')
  }
}

module.exports = voiceTranslate
