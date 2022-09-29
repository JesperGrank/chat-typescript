import express, { Application, json, Request, Response } from 'express'
import cors from 'cors'
import ChatMessage from "@my-chat-app/shared"

import crypto from "crypto"

const app: Application = express()
app.use(cors())
app.use(json())
const port: number = parseInt(process.env.SERVER_PORT || "3001")

const CHAT_MESSAGES: ChatMessage[] = [{id: "1", author: "Jeppe", text: "Första inlägget", timeStamp: new Date()}, {id: "2", author: "JG", text: "andra inlägg", timeStamp: new Date()}]

app.get('/', (req: Request, res: Response<ChatMessage[]>) => {   
    res.send(CHAT_MESSAGES)
})

app.post("/", (req: Request<ChatMessage>, res: Response<ChatMessage[]>) => {
    const message = req.body
    message.id = crypto.randomUUID()

    console.log("Sent new message", message)
    CHAT_MESSAGES.push(message)
    res.send(CHAT_MESSAGES)

})

app.listen(port, function () {
    console.log(`App is listening on port ${port} !`)
})