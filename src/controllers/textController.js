const chatCompletion = require('../services/openaiCompletion')

const getAnswer = async (req, res) => {
  const prompt = req.query.prompt
  if (!prompt) return res.status(400).json({ message: 'El prompt es requerido' })
  try {
    const answer = await chatCompletion(prompt)
    res.status(200).json({ answer })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = getAnswer
