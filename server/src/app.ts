import express, { Application, json, Request, Response } from 'express'
import cors from 'cors'
import dotenv from "dotenv"

import { setupMongoDb } from './models/messages-repository'
import messageController from './api/message-controller'
import UserController from "./api/user-controller"

dotenv.config()

const app: Application = express()
app.use(cors())
app.use(json())

const port: number = parseInt(process.env.SERVER_PORT || "3001")
const mongoUrl: string = process.env.MONGODB_URL || "mongodb://localhost:27017"

app.use("/", messageController)
app.use("/register", UserController)

app.listen(port, async function () {
    await setupMongoDb(mongoUrl)
    console.log(`App is listening on port ${port}`)
})