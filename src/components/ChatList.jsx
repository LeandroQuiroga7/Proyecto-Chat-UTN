import { useState } from "react";

function ChatList({ chats, setChats, selectedChatId, onSelectChat }) {
  const [search, setSearch] = useState("");

  const filteredChats = chats.filter(chat =>
    chat.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="chat-list">
      {/* Buscador */}
      <input
        type="text"
        placeholder="Buscar chat..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="chat-search"
      />

      {/* Botón nuevo chat */}
      <button
        onClick={() => {
          const newChat = {
            id: Date.now(),
            name: `Chat ${chats.length + 1}`,
            avatar: "🟢",
            status: "online",
            messages: []
          };

          setChats([...chats, newChat]);
        }}
      >
        Nuevo chat
      </button>

      {/*  CONTENEDOR SCROLLEABLE */}
      <div className="chat-list-items">
        {filteredChats.map((chat) => (
          <div
            key={chat.id}
            className="chat-item"
            onClick={() => onSelectChat(chat.id)}
          >
            <span className="avatar">{chat.avatar}</span>

            <div className="chat-info">
              <div className="chat-name">{chat.name}</div>
              <div className="chat-status">{chat.status}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChatList;