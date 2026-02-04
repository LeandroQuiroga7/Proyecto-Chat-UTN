import { useState } from "react";
import ChatList from "./components/ChatList";
import ChatWindow from "./components/ChatWindow";
import "./App.css";

function App() {
  const [chats, setChats] = useState([
    {
      id: 1,
      name: "Chat 1",
      messages: [{ from: "bot", text: "Hola 👋" }],
    },
    {
      id: 2,
      name: "Chat 2",
      messages: [{ from: "bot", text: "¿Cómo estás?" }],
    },
  ]);

  const [selectedChatId, setSelectedChatId] = useState(1);

  const selectedChat = chats.find(chat => chat.id === selectedChatId);

  const sendMessage = (text) => {
  // mensaje del usuario
  setChats(prevChats =>
    prevChats.map(chat =>
      chat.id === selectedChatId
        ? {
            ...chat,
            messages: [...chat.messages, { from: "user", text }],
          }
        : chat
    )
  );

  // respuesta automática
  setTimeout(() => {
    setChats(prevChats =>
      prevChats.map(chat =>
        chat.id === selectedChatId
          ? {
              ...chat,
              messages: [
                ...chat.messages,
                { from: "bot", text: "Estoy pensando..." },
              ],
            }
          : chat
      )
    );
  }, 1000);
};


  return (
    <div>
      <h1>Chat Clon</h1>
      <div className="app">
        <ChatList
          chats={chats}
          selectedChatId={selectedChatId}
          onSelectChat={setSelectedChatId}
        />
        <ChatWindow chat={selectedChat} onSend={sendMessage} />
      </div>
    </div>
  );
}

export default App;
