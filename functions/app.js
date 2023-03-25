import chalk from "chalk"
import { config } from "dotenv"
import { Configuration, OpenAIApi } from "openai"
import readline from "readline"

config()

export const key = process.env.API_KEY

const configuration = new Configuration({
    apiKey: key
})

export const openai = new OpenAIApi(configuration)
export const userInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}) 
export function color(text, color) {
    return chalk[color](text)
}