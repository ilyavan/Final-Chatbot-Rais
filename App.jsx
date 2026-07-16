import { useState } from 'react'
import { ChatInput } from './src/components/ChatInput';
import ChatMessages from './components/ChatMessages';
import './App.css'
import './ChatInput.css';

 function App() {
        const [chatMessages, setChatMessages] = useState([{
          message: 'hello chatbot',
          sender: 'user',
          id: 'id1'
        }, {
          message: 'Hello! how can i help you?',
          sender: 'robot',
          id: 'id2'
        }, {
          message: 'can you get me todays date?',
          sender: 'user',
          id: 'id3'
        }, {
          message: 'Today is July 14',
          sender: 'robot',
          id: 'id4'
        }]);
        // const [chatMessages, setChatMessages] = array; => shortcut for above line
        // const chatMessages = array[0]; => shortcut for above line
        // const setChatMessages = array[1]; => shortcut for above line

        return(
          <div className="app-container">
            <ChatMessages
              chatMessages ={chatMessages}
            />
            <ChatInput 
              chatMessages={chatMessages}
              setChatMessages={setChatMessages}
            />
          </div>
          
        )
      }

export default App
