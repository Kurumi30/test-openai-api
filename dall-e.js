import { color } from "./functions/app.js"
import { userInterface } from "./functions/app.js"
import { openai } from "./functions/app.js"

async function start() {
    const question = await new Promise(resolve => {
        userInterface.question("Digite o comando: ", answer => {
            resolve(answer)
        })
    })

    userInterface.question(question, async () => {
        const res = await openai.createImage({
            prompt: question,
            n: 2,
            response_format: "url",
            size: "512x512"
        })

        const { data } = res.data
        const response = color(data[0].url, "blue")

        console.log(`A imagem foi gerada com sucesso! A URL da imagem é: ${response}`)
    })
}

start()