import React, { useEffect, useState } from 'react';
import ChatMessage from "@my-chat-app/shared"
import './App.css';
import axios from "axios"
import { Card } from '@mui/material';

  axios.defaults.baseURL = "http://localhost:3001"

  const fetchMessages = async (): Promise <ChatMessage[]> => {
    const reponse = await axios.get<ChatMessage[]>("/")
    return reponse.data
  }
function App() {

  const [chatMessage, setChatMessage] = useState<string>("")
  const [messages, setMessages] = useState<ChatMessage[]>([])

  useEffect(() => {
    fetchMessages().then(setMessages)
  },[])

  const sendMessage = (chatMessage: string): void => {
    const message: ChatMessage = {
      text: chatMessage,
      author: "Jesper",
      timeStamp: new Date()
    }
    axios.post<ChatMessage[]>("/", message)
    .then((response) => setMessages(response.data))
  }

  return (
    <div className='App'>
            <header className='App-header'>
      
      {messages && messages.map((singleMessage) => {
        return (
          <div key={singleMessage.id}>
            {singleMessage.author}  <br/>
            {singleMessage.text}
          </div>
        )
      })}
      </header>
      <section>
        <input type="text" value={chatMessage} onChange={(e) => setChatMessage(e.target.value)}/>
        <button onClick={(e) => sendMessage(chatMessage)}>Send message</button>
        
      </section>
      
    </div>
    
  );
}

export default App;
