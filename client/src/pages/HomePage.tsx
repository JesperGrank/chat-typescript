import {useEffect, useState} from 'react'
import {ChatMessage} from "@my-chat-app/shared"
import axios from "axios"

axios.defaults.baseURL = "http://localhost:3001"

export default function HomePage() {

    const [chatMessage, setChatMessage] = useState<string>("")
    const [userName, setUserName] = useState<string>("")
    const [messages, setMessages] = useState<ChatMessage[]>([])
    const [error, setError] = useState<string | undefined>("")

    const fetchMessages = async (): Promise <ChatMessage[]> => {
      const reponse = await axios.get<ChatMessage[]>("/")
      return reponse.data
    }
  
    useEffect(() => {
      const interval = setInterval(() => {
        fetchMessages()
          .then(setMessages)
          .catch((error) => {
            setMessages([])
            setError("Something went wrong when fetching messages...")
          })
      }, 2500)
    }, [])
  
    const createMessage = async (chatMessage: string, userName: string): Promise<void> => {
      const message: ChatMessage = {
        text: chatMessage,
        author: userName,
        timeStamp: new Date()
      }
      try{
        const response = await axios.post<ChatMessage[]>("/", message)
        setMessages(response.data)
      } catch (error){
        setMessages([])
        setError("Invalid username and message input. Both needs to have a value.")
      }

    }
    const output = () => {
      if(error){
          return (<div>{error}</div>)
      } else if(messages) {
        return (<div>
        {messages && messages.map((singleMessage, index) => {
        return (
          <div key={index}>
            {singleMessage.author}: {singleMessage.text} <br/>
            {singleMessage.timeStamp.toString().split('T')[0].substring(0,10)} - {singleMessage.timeStamp.toString().split('T')[1].substring(0, 5)}
          </div>
        ) 
      })}
      </div>)
      } else{
        <div>'Something went wrong fetching messages...'</div>
      }
    }
  return (
    <div>
        {/* {messages && messages.map((singleMessage, index) => {
        return (
          <div key={index}>
            {singleMessage.author}: {singleMessage.text} <br/>
            {singleMessage.timeStamp.toString().split('T')[0].substring(0,10)} - {singleMessage.timeStamp.toString().split('T')[1].substring(0, 5)}
          </div>
        )
      })} */}
      {output()}
      <section>
        <input type="text" placeholder='Username' value={userName} onChange={(e) => setUserName(e.target.value)}/>
        <input type="text" placeholder="Message" value={chatMessage} onChange={(e) => setChatMessage(e.target.value)}/>
        <button onClick={(e) => createMessage(chatMessage, userName)}>Send message</button>  
      </section>
    </div>
  )
}
