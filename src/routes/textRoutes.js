const { Router } = require('express')
const getAnswer = require('../controllers/textController.js')

const textRoutes = Router()

textRoutes.get('/', getAnswer)

module.exports = textRoutes
