import { color, userInterface, openai, exitMessage } from "./functions/app.js"

userInterface.prompt()
userInterface.on("line", async input => {
    if(input === "exit") return exitMessage()

    const res = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: input }]
    })
    const response = res.data.choices[0].message.content

    console.log(color(`Inteligência Artificial: ${response}`, "red"))
    userInterface.prompt()
})
