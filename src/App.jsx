import { useState } from "react";
import ChatList from "./components/ChatList";
import ChatWindow from "./components/ChatWindow";
import "./App.css";

function App() {
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <div>
      <h1>Chat Clon</h1>

      <div className="app">
        <ChatList
          selectedChat={selectedChat}
          setSelectedChat={setSelectedChat}
        />

        <ChatWindow selectedChat={selectedChat} />
      </div>
    </div>
  );
}

export default App;
