import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';


function App() {

  return (
    <div className='App'>

      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/chat" element={<ChatPage/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
      
    </div>
    
  );
}

export default App;
