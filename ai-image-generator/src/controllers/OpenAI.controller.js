import { Configuration, OpenAIApi } from 'openai'
import dotenv from 'dotenv'

dotenv.config()

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)

export const GenerateImage = async (req, res) => {
  try {
    const response = await openai.createImage({
      prompt: 'Polar bear on ice saktes',
      n: 1,
      size: '512x512',
    })
    const imageUrl = response.data.data[0].url

    res.status(200).json({
      success: true,
      data: imageUrl,
    })
  } catch (error) {
    if (error.response) {
      console.log(error.response.status)
      console.log(error.response.data)
    } else {
      console.log(error.message)
    }
    res.status(400).json({
      success: false,
      error: 'The image could not be generated',
    })
  }
}
