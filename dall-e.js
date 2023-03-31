import {
    color,
    userInterface,
    openai,
    shorten,
    exitAction,
    msg
} from "./functions/app.js"

(async function start() {
    userInterface.question("Digite o comando: ", async question => {
        if (msg.includes(question.toLowerCase())) return exitAction()

        try {
            const res = await openai.createImage({
                prompt: question,
                n: 1, // 1 - 10
                response_format: "url", // b64_json
                size: "512x512" // 256 x 256, 1024 x 1024
            })
            const { data } = res.data
            const shortLink = await shorten(data[0].url)
            const response = color(shortLink, "blue")

            console.log(`A imagem foi gerada com sucesso! A URL da imagem é: ${response}`)
        } catch (error) {
            //console.error(error)
            let errorMsg = error.response.data.error.type

            if (errorMsg === "invalid_request_error") {
                console.error(color("Houve um erro: O prompt enviado não atende às políticas de segurança da OpenAI. Por favor, revise o prompt e tente novamente.", "red"))
            }
        }

        start()
    })
})()
