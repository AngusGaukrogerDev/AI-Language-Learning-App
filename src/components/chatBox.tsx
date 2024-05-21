import { useState, ChangeEvent, KeyboardEvent } from 'react';
import axios from 'axios';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

const ChatBox: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleFetchResponse = async (userInput: string) => {
    try {
      const res = await fetch(`/api/openAIRequests?prompt=${encodeURIComponent(userInput)}`);
      const data = await res.json();
      if (res.ok) {
        const botMessage = data.completion.message.content;
        setMessages(prevMessages => [
          ...prevMessages,
          { sender: 'bot', text: botMessage }
        ]);
      } else {
        setMessages(prevMessages => [
          ...prevMessages,
          { sender: 'bot', text: 'Error fetching response.' }
        ]);
      }
    } catch (error) {
      setMessages(prevMessages => [
        ...prevMessages,
        { sender: 'bot', text: 'Error fetching response.' }
      ]);
    }
  };

  const handleSendMessage = () => {
    const userMessage = input;
    setMessages(prevMessages => [
      ...prevMessages,
      { sender: 'user', text: userMessage }
    ]);
    setInput('');
    handleFetchResponse(userMessage);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-4 flex flex-col">
        <div className="flex-1 overflow-y-auto mb-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-2 rounded-lg my-1 ${
                msg.sender === 'user' ? 'bg-blue-100 self-end text-right' : 'bg-gray-100 self-start text-left'
              }`}
            >
              <span>{msg.text}</span>
            </div>
          ))}
        </div>
        <div className="flex">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Type a message..."
            className="flex-1 border rounded-l-lg p-2"
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
