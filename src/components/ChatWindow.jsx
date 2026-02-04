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
            style={{
              textAlign: msg.from === "user" ? "right" : "left",
            }}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escribí un mensaje"
      />
      <button onClick={handleSend}>Enviar</button>
    </div>
  );
}

export default ChatWindow;
