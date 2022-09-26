import express, { Application, json, Request, Response } from 'express'
import cors from 'cors'
import ChatMessage from "@my-chat-app/shared"

const app: Application = express()
app.use(cors())
app.use(json())
const port: number = parseInt(process.env.SERVER_PORT || "3001")

app.get('/', (req: Request, res: Response<ChatMessage>) => {
    console.log(" / route")
    res.send({
        id: "1",
        author: "JG",
        text: "Chat-msg",
        timeStamp: new Date()
    })
})

app.get('/test', (req: Request, res: Response) => {
    console.log("test route")
    res.send('test page')
})

app.listen(port, function () {
    console.log(`App is listening on port ${port} !`)
})