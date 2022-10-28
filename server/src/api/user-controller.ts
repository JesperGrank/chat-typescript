import { User } from "@my-chat-app/shared"
import express, { Request, Response } from "express"
import { saveUserItem } from "../services/user-service"
// import { findOneUser, loadAllUsers } from "../models/user-repository"

const UserController = express.Router()

/*
UserController.post("/") tar emot en request av interfacet <User> till servern.
Servern försöker sen  i "try och catch" blocket att skicka det clienten har skrivit in i bodyn 
att anropa saveUserItem som tar emot hela User objectet, där den också kollar att alla inputs är fyllda,
om dom är det sparar vi den användare vi försökt registrera för att sedan med "res.send(await loadAllUsers())"
skriva ut alla användare som finns i databasen.
*/
UserController.post("/", async (req: Request<User>, res: Response<User | string>) => {
    console.log("Skickar", req.body)
    try {
        await saveUserItem(req.body);
        // res.send(await loadAllUsers())
        // res.status(201).send("User created successfully!")
        res.send("User created")
    } catch (e) {
        res.sendStatus(400)
        // res.status(400).send('User or email already exists...');
        // res.send("Username or email already exists...")
    }
})

// UserController.get("/:username", async (req: Request, res: Response<User | null>) => {
//     const username = req.params.username
//     console.log(username)
//     const seeUser = await findOneUser(username)
//     console.log(seeUser)
//     res.send(seeUser)
// })

export default UserController