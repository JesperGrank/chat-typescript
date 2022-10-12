import {User} from "@my-chat-app/shared"
import { saveUser } from "../models/user-repository";

export const saveUserItem = async (User: User): Promise<void> => {
    if(User.username == "" || User.password == "" || User.email == ""){
        throw new Error("Invalid username or password")
    }
    await saveUser(User)
}