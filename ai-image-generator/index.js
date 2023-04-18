import express from 'express'
import dotenv from 'dotenv'
import * as path from 'path'
import { fileURLToPath } from 'url'
import { OpenAIRouter } from './src/routes/OpenAI.routes.js'
import { getDirName } from './src/utils/utils.js'

dotenv.config()
const port = process.env.PORT || 5000

const app = express()

const dirname = getDirName(import.meta.url)
console.log(dirname)

// Enable body parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(express.static(path.join(dirname, 'public')))

app.use(OpenAIRouter)

app.listen(port, () => console.log(`Server started on port ${port}`))
