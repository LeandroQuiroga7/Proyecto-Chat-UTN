import { useState } from "react";

function ChatWindow({ chat, onSend }) {
  const [text, setText] = useState("");

  if (!chat) {
    return <div className="chat-window">Seleccioná un chat</div>;
  }

  const handleSend = () => {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  };

  return (
    <div className="chat-window">
      <h2>{chat.name}</h2>

      <div className="messages">
        {chat.messages.map((msg, index) => (
          <div
            key={index}
            className={`message-row ${msg.from}`}   
          >
            <div className={`message ${msg.from}`}> 
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Escribí un mensaje"
        />
        <button onClick={handleSend}>Enviar</button>
      </div>
    </div>
  );
}

export default ChatWindow;