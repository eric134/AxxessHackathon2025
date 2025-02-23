// import React, { useState } from 'react'
// import { FiSend } from 'react-icons/fi'

// const ChatBot = () => {
//   const [messages, setMessages] = useState([])
//   const [input, setInput] = useState('')

//   const sendMessage = async () => {
//     if (input.trim() === '') return

//     // Append user's message
//     const userMessage = { sender: 'user', text: input }
//     setMessages((prev) => [...prev, userMessage])
//     const currentInput = input
//     setInput('')

//     try {
//       // Send the message to the Python chat bot API
//       const response = await fetch('http://localhost:5000/api/chat', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ message: currentInput })
//       })
//       const data = await response.json()
//       const botMessage = { sender: 'bot', text: data.response }
//       setMessages((prev) => [...prev, botMessage])
//     } catch (error) {
//       console.error('Error sending message:', error)
//       const errorMessage = { sender: 'bot', text: 'Sorry, something went wrong.' }
//       setMessages((prev) => [...prev, errorMessage])
//     }
//   }

//   const handleKeyDown = (e) => {
//     if (e.key === 'Enter') sendMessage()
//   }

//   return (
//     <div className="flex flex-col h-screen bg-gray-100">
//       <div className="flex-1 p-4 overflow-auto">
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             className={`mb-2 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
//           >
//             <div
//               className={`p-2 rounded-lg max-w-xs ${
//                 msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-900'
//               }`}
//             >
//               {msg.text}
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="p-4 border-t border-gray-300 flex">
//         <input
//           type="text"
//           className="flex-1 p-2 border rounded-l-lg focus:outline-none"
//           placeholder="Type your message..."
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={handleKeyDown}
//         />
//         <button
//           onClick={sendMessage}
//           className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600 transition"
//         >
//           <FiSend size={20} />
//         </button>
//       </div>
//     </div>
//   )
// }

// export default ChatBot
import React, { useState, useEffect } from 'react';
import { FiSend } from 'react-icons/fi';

INTRO_MESSAGE = "Hello! I'm Healthcare Harry 🩺\n\nI'm here to provide friendly, clear health advice in bullet points.\n\nYou can ask me about:\n• Symptoms\n• Medications\n• Healthy habits\n• Medical conditions\n• General health questions\n\nI'll do my best to help!"

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  // Fetch introductory message when component mounts
  useEffect(() => {
    fetch('http://localhost:5000/api/intro')
      .then(response => response.json())
      .then(data => {
        setMessages([{ sender: 'bot', text: data.response }]);
      })
      .catch(error => {
        console.error('Error fetching intro:', error);
        setMessages([{ 
          sender: 'bot', 
          text: INTRO_MESSAGE, 
        }]);
      });
  }, []);

  const sendMessage = async () => {
    if (input.trim() === '') return;

    // Append user's message
    const userMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input;
    setInput('');

    try {
      // Send the message to the Python chat bot API
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: currentInput })
      });
      const data = await response.json();
      const botMessage = { sender: 'bot', text: data.response };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = { 
        sender: 'bot', 
        text: 'Sorry, something went wrong. Please try again.' 
      };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex-1 p-4 overflow-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`p-2 rounded-lg max-w-xs ${
                msg.sender === 'user' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-300 text-gray-900'
              }`}
            >
              {msg.text.split('\n').map((line, i) => (
                <p key={i} className="my-1">{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-gray-300 flex">
        <input
          type="text"
          className="flex-1 p-2 border rounded-l-lg focus:outline-none"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600 transition"
        >
          <FiSend size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatBot;