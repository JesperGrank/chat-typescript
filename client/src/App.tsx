import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import HomePage from './pages/HomePage';

  // axios.defaults.baseURL = "http://localhost:3001"

  // const fetchMessages = async (): Promise <ChatMessage[]> => {
  //   const reponse = await axios.get<ChatMessage[]>("/")
  //   return reponse.data
  // }

function App() {

  // const [chatMessage, setChatMessage] = useState<string>("")
  // const [userName, setUserName] = useState<string>("")
  // const [messages, setMessages] = useState<ChatMessage[]>([])

  // useEffect(() => {
  //   fetchMessages().then(setMessages)
  // },[])

  // const sendMessage = (chatMessage: string): void => {
  //   const message: ChatMessage = {
  //     text: chatMessage,
  //     author: userName,
  //     timeStamp: new Date()
  //   }
  //   axios.post<ChatMessage[]>("/", message)
  //   .then((response) => setMessages(response.data))
  // }

  return (
    <div className='App'>

      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
      {/* {messages && messages.map((singleMessage, index) => {
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
      </section> */}
      
    </div>
    
  );
}

export default App;
