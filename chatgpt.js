import {
    color,
    userInterface,
    openai,
    exitMessage,
    msg
} from "./functions/app.js"

userInterface.prompt()
userInterface.on("line", async input => {
    if (msg.includes(input.toLowerCase())) return exitMessage()

    const res = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: input }]
    })
    const response = res.data.choices[0].message.content
    const text = color(response, "green")

    console.log(color(`Inteligência Artificial: ${text}`, "cyanBright"))
    userInterface.prompt()
})
