const getAudioStream = require('../services/getAudioStream')
const chatCompletion = require('../services/openaiCompletion')
const voiceTranslate = require('../services/openaiTraslation')
const readAudioStream = require('../services/readAudioStream')

const getAudioTranslateAndAnswer = async (req, res) => {
  const prompt = req.query.prompt

  if (!prompt) return res.status(400).json({ message: 'El prompt: "nombre del audio" es requerido' })
  const file = readAudioStream(prompt)

  try {
    const traslation = await voiceTranslate(file)
    const answer = await chatCompletion(traslation)
    res.status(200).json({ traslation, answer })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const getAudioUrlTranslateAndAnswer = async (req, res) => {
  const audioUrl = req.body.audioUrl

  if (!audioUrl) return res.status(400).json({ message: 'El audioUrl link es requerido' })

  try {
    const file = await getAudioStream(audioUrl)
    const traslation = await voiceTranslate(file)
    const answer = await chatCompletion(traslation)
    res.status(200).json({ traslation, answer })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = {
  getAudioTranslateAndAnswer,
  getAudioUrlTranslateAndAnswer
}
