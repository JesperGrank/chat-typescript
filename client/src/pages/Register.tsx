import {useState} from 'react'
import { User } from '@my-chat-app/shared'
import axios from 'axios'

axios.defaults.baseURL = "http://localhost:3001"

export default function Register() {

  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [email, setEmail] = useState<string>("") 

  const createUser = (username: string): void => {
    const user: User = {
      username,
      password,
      email
    }
    axios.post<User>("/register", user)
    .then((response => console.log(response)))
  }

  return (
    <div>
      <h2> Register Page!</h2>

      <section>
        <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}/>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={(e) => createUser(username)}>Send message</button> 
      </section>

    </div>
  )
}
