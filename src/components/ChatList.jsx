import { useState } from "react";

function ChatList({ selectedChat, setSelectedChat }) {
  const [chats, setChats] = useState([
    { id: 1, name: "Chat 1" },
    { id: 2, name: "Chat 2" },
  ]);

  return (
    <div className="chat-list">
      <h2>Chats</h2>

      <button
        onClick={() =>
          setChats([
            ...chats,
            { id: chats.length + 1, name: `Chat ${chats.length + 1}` },
          ])
        }
      >
        Nuevo chat
      </button>

      {chats.map((chat) => (
        <div
          key={chat.id}
          onClick={() => setSelectedChat(chat)}
          style={{
            cursor: "pointer",
            fontWeight:
              selectedChat?.id === chat.id ? "bold" : "normal",
          }}
        >
          {chat.name}
        </div>
      ))}
    </div>
  );
}

export default ChatList;
