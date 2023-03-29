import { config } from "dotenv"
import { Configuration, OpenAIApi } from "openai"
import chalk from "chalk"
import readline from "readline"
import fetch from "node-fetch"

config()

const key = process.env.API_KEY
const token = process.env.TOKEN
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

export async function shorten(URL) {
    const apiUrl = `https://api-ssl.bitly.com/v4/shorten`
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ long_url: URL })
    }
    const response = await fetch(apiUrl, options)
        .then(response => response.json())
        .then(data => data.link)
        .catch(error => console.log(error))

    return response
}

export const exitMessage = () => {
    console.log(color("Saindo...", "redBright"))

    setTimeout(() => {
        console.clear()
        process.exit()
    }, 3000)
}
  