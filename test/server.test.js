const supertest = require('supertest')
const app = require('../src/app')

const request = supertest(app)

describe('Server testing', () => {
  describe('Testing for the /text endpoint', () => {
    it('Should return a successful response from /text?prompt="hello"', async () => {
      const response = await request.get('/text?prompt=hola')
      expect(response.status).toBe(200)
      expect(response.body).toHaveProperty('answer')
      expect(response.body.answer).not.toBe('')
    })

    it('Should return an error when the prompt is missing', async () => {
      const response = await request.get('/text')
      expect(response.status).toBe(400)
      expect(response.body).toEqual({ message: 'El prompt es requerido' })
    })
  })

  describe('Tests for GET /audio endpoint with a local audio name prompt', () => {
    jest.setTimeout(8000)
    it('Should return a successful response from /audio?prompt="audio"', async () => {
      const response = await request.get('/audio?prompt=audio')
      expect(response.status).toBe(200)
      expect(response.body).toHaveProperty('traslation')
      expect(response.body).toHaveProperty('answer')
      expect(response.body.traslation).not.toBe('')
      expect(response.body.answer).not.toBe('')
    })

    it('Should return an error when the prompt is missing', async () => {
      const response = await request.get('/audio')
      expect(response.status).toBe(400)
      expect(response.body).toEqual({ message: 'El prompt: "nombre del audio" es requerido' })
    })
  })

  describe('Tests for POST /audio endpoint with audioUrl in body', () => {
    jest.setTimeout(8000)
    it('Should return a successful response from /audio with audioUrl in body', async () => {
      const response = await request.post('/audio').send({ audioUrl: 'https://poke-app-seven.vercel.app/audio.m4a' })
      expect(response.status).toBe(200)
      expect(response.body).toHaveProperty('traslation')
      expect(response.body).toHaveProperty('answer')
      expect(response.body.traslation).not.toBe('')
      expect(response.body.answer).not.toBe('')
    })

    it('Should return an error when the prompt is missing', async () => {
      const response = await request.post('/audio')
      expect(response.status).toBe(400)
      expect(response.body).toEqual({ message: 'El audioUrl link es requerido' })
    })
  })
})
