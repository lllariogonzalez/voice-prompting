const express = require('express')
const cors = require('cors')
const audioRoutes = require('./routes/audioRoutes.js')
const textRoutes = require('./routes/textRoutes.js')
const errorHandler = require('./services/errorHandler')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/text', textRoutes)
app.use('/audio', audioRoutes)

app.use(errorHandler)

module.exports = app
