import { useState } from 'react'
import { User } from '@my-chat-app/shared'
import axios from 'axios'

axios.defaults.baseURL = "http://localhost:3001"

export default function Register() {

  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [error, setError] = useState<string>("")

  const createUser = async (username: string, email: string, password: string): Promise<void> => {
    const user: User = {
      username,
      email,
      password
    }
    try{
      const response = await axios.post<User>("/register", user)
      console.log(response)
    } catch (e){
      setError("User already exists or invalid entry")
    }
  }


  return (
    <div>
      <h2> Register Page!</h2>

      <>
        {error}
      </>

      <section>
        <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={(e) => createUser(username, email, password)}>Register user</button>
      </section>



    </div>
  )
}
