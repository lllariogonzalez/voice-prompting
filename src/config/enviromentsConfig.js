require('dotenv').config()

const PORT = process.env.PORT
const ORGANIZATION = process.env.OPENAI_ORGANIZATION
const OPENAI_API_KEY = process.env.OPENAI_API_KEY

module.exports = {
  PORT,
  ORGANIZATION,
  OPENAI_API_KEY
}
