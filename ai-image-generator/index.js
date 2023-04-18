import express from 'express'
import dotenv from 'dotenv'
import { OpenAIRouter } from './src/routes/OpenAI.routes.js'

dotenv.config()
const port = process.env.PORT || 5000

const app = express()

// Enable body parser
app.use(express.json())

app.use(OpenAIRouter)

app.listen(port, () => console.log(`Server started on port ${port}`))
