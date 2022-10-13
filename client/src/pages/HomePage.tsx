import {useEffect, useState} from 'react'
import {ChatMessage} from "@my-chat-app/shared"
import axios from "axios"

axios.defaults.baseURL = "http://localhost:3001"

const fetchMessages = async (): Promise <ChatMessage[]> => {
  const reponse = await axios.get<ChatMessage[]>("/")
  return reponse.data
}

export default function HomePage() {

    const [chatMessage, setChatMessage] = useState<string>("")
    const [userName, setUserName] = useState<string>("")
    const [messages, setMessages] = useState<ChatMessage[]>([])
  
    useEffect(() => {
      fetchMessages().then(setMessages)
    },[])
  
    const sendMessage = (chatMessage: string): void => {
      const message: ChatMessage = {
        text: chatMessage,
        author: userName,
        timeStamp: new Date()
      }
      axios.post<ChatMessage[]>("/", message)
      .then((response) => setMessages(response.data))
    }
  return (
    <div>
        {messages && messages.map((singleMessage, index) => {
        return (
          <div key={index}>
            {singleMessage.author}: {singleMessage.text} <br/>
            {singleMessage.timeStamp.toString().split('T')[0].substring(0,10)} - {singleMessage.timeStamp.toString().split('T')[1].substring(0, 5)}
          </div>
        )
      })}

      <section>
        <input type="text" placeholder='Username' value={userName} onChange={(e) => setUserName(e.target.value)}/>
        <input type="text" placeholder="Message" value={chatMessage} onChange={(e) => setChatMessage(e.target.value)}/>
        <button onClick={(e) => sendMessage(chatMessage)}>Send message</button>  
      </section>
    </div>
  )
}
