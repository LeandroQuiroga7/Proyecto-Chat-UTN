function ChatWindow({ selectedChat }) {
  return (
    <div className="chat-window">
      <h2>
        {selectedChat ? selectedChat.name : "Seleccioná un chat"}
      </h2>
    </div>
  );
}

export default ChatWindow;
