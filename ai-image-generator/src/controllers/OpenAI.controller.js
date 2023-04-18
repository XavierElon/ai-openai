import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)

export const GenerateImage = async (req, res) => {
  try {
    const response = await openai.createImage({
      prompt: 'Achilles and Athena',
      n: 1,
      size: '512x512',
    })
  } catch (error) {}
}
