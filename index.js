import { config } from "dotenv"
import { Configuration, OpenAIApi } from "openai"
import readline from "readline"
import { color } from "./functions/app.js"

config()

const key = process.env.API_KEY
const configuration = new Configuration({
    apiKey: key
})
const openai = new OpenAIApi(configuration)

const userInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

userInterface.prompt()
userInterface.on("line", async input => {
    const res = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: input }]
    })
    const response = res.data.choices[0].message.content

    console.log(color(`Inteligência Artificial: ${response}`, "red"))
    userInterface.prompt()
})
