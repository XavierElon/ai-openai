import express from 'express'
import dotenv from 'dotenv'
import { OpenAIRouter } from './routes/OpenAI.routes'

dotenv.config()
const port = process.env.PORT || 5000

const app = express()
app.use(OpenAIRouter)

app.listen(port, () => console.log(`Server started on port ${port}`))
