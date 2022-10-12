import {User} from "@my-chat-app/shared"
import express, {Request, Response} from "express"
import { saveUserItem } from "../services/user-service"

const UserController = express.Router()

UserController.post("/", async (req: Request<User>, res: Response<void>) => {
    try{
        res.send(await saveUserItem(req.body))
    } catch(e){
        res.sendStatus(400)
    }
})


export default UserController