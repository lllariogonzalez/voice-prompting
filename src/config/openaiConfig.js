const { Configuration, OpenAIApi } = require('openai')
const { ORGANIZATION, OPENAI_API_KEY } = require('./enviromentsConfig')

const configuration = new Configuration({
  organization: ORGANIZATION,
  apiKey: OPENAI_API_KEY
})

const openaiClient = new OpenAIApi(configuration)

module.exports = openaiClient
