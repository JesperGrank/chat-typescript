import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function HomePage() {

  const navigate = useNavigate()

  const [userName, setUserName] = useState<string>("")
  const [error, setError] = useState<string>()

  const createUser = async (username: string): Promise <void> => {
      console.log(username)
      if(!username || username == ""){
      localStorage.removeItem("ts-webchat")
      setError("You need to have a username to enter chat")
    } else{
      localStorage.setItem("ts-webchat", username)
      navigate("/chat")
    }
  }



  return (
    <div>
      <h1>Select a username to enter the chat</h1>
      
      {error}
      <section>
      <input type="text" placeholder="Username" value={userName} onChange={(e) => setUserName(e.target.value)}></input>
      <button onClick={(e) => createUser(userName)}>Enter chat</button>
      </section>
        
    </div>
  )
}
