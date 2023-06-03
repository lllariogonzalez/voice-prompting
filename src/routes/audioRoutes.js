const { Router } = require('express')
const { getAudioTranslateAndAnswer, getAudioUrlTranslateAndAnswer } = require('../controllers/audioController.js')

const audioRouter = Router()

audioRouter
  .get('/', getAudioTranslateAndAnswer)
  .post('/', getAudioUrlTranslateAndAnswer)

module.exports = audioRouter
