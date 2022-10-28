import {User} from "@my-chat-app/shared"
import { saveUser} from "../models/user-repository";

export const saveUserItem = async (user: User): Promise<void> => {
    if(!user.username || user.username == "" || !user.email || user.email == "" || !user.password || user.password == ""){
        throw new Error ("Invalid inputs")
    }
    await saveUser(user)
}