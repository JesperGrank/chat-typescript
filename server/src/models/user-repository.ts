import {User} from "@my-chat-app/shared"
import {model, Schema} from "mongoose"

const UserSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true}
})

const UserModel = model<User>("User", UserSchema)

export const saveUser = async (User: User): Promise<void> => {
    const newUser = new UserModel(User)
    newUser.save()
}
