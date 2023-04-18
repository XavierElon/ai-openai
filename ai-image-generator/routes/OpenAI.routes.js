import express from 'express'

export const OpenAIRouter = express.Router()

Router.post('/openai/generateimage', (req, tes) => {
  res.status(200).json({
    success: true,
  })
})
