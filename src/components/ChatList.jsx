function ChatList({ chats, selectedChatId, onSelectChat }) {
  return (
    <div className="chat-list">
      <h2>Chats</h2>

      {chats.map(chat => (
        <div
          key={chat.id}
          onClick={() => onSelectChat(chat.id)}
          style={{
            cursor: "pointer",
            fontWeight: chat.id === selectedChatId ? "bold" : "normal",
          }}
        >
          {chat.name}
        </div>
      ))}
    </div>
  );
}

export default ChatList;
