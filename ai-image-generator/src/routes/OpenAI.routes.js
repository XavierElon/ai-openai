import express from 'express'
import { GenerateImage } from '../controllers/OpenAI.controller.js'

export const OpenAIRouter = express.Router()

OpenAIRouter.post('/openai/generateimage', GenerateImage)
