const openaiClient = require('../config/openaiConfig')

async function chatCompletion (prompt) {
  try {
    const completion = await openaiClient.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are helpful assistant. Summarize the response in about 50 words.'
        },
        { role: 'user', content: 'Hola' },
        { role: 'assistant', content: '¡Hola! ¿En qué puedo ayudarte hoy?' },
        { role: 'user', content: prompt }
      ]
    })

    return completion.data.choices[0]?.message?.content
  } catch (error) {
    console.error(error.message)
    throw new Error('Error al realizar la solicitud a OpenAI Completions')
  }
}

module.exports = chatCompletion
