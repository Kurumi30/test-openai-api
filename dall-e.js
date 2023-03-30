import {
    color,
    userInterface,
    openai,
    shorten,
    exitMessage,
    msg
} from "./functions/app.js"

(async function start() {
    userInterface.question("Digite o comando: ", async (question) => {
        if (msg.includes(question.toLowerCase())) return exitMessage()

        const res = await openai.createImage({
            prompt: question,
            n: 1,
            response_format: "url",
            size: "512x512"
        })
        const { data } = res.data
        const shortLink = await shorten(data[0].url)
        const response = color(shortLink, "blue")

        console.log(`A imagem foi gerada com sucesso! A URL da imagem é: ${response}`)

        start()
    })
})()
