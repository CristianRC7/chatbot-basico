import { useState } from 'react';
import './App.css';
import Logo from './image/shinra_kusakabe.webp';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const handleSend = async () => {
    if (input.trim()) {
      const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const newMessages = [...messages, { sender: 'user', text: input, time }];
      setMessages(newMessages);
      setInput('');
      setIsThinking(true);

      const response = await fetch('http://localhost:5000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: input })
      });

      const data = await response.json();
      setMessages([...newMessages, { sender: 'bot', text: data.response, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
      setIsThinking(false);
    }
  };

  return (
    <div className="chat-container">
      <div className="header">
        <img src={Logo} alt="BotBerto" className="bot-image" />
        <span className="bot-name">BotBerto</span>
      </div>
      <div className="chat-content">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.sender === 'bot' && <img src={Logo} alt="BotBerto" className="bot-message-image" />}
            <div className="message-text">
              {message.text}
              <div className="message-time">{message.time}</div>
            </div>
          </div>
        ))}
        {isThinking && <div className="thinking">BotBerto está pensando...</div>}
      </div>
      <div className="input-container">
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Escribe un mensaje..." 
        />
        <button onClick={handleSend}>Enviar</button>
      </div>
    </div>
  );
}

export default App;
