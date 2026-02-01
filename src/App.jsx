import ChatList from "./components/ChatList";
import ChatWindow from "./components/ChatWindow";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Chat Clon</h1>

      <div className="app">
        <ChatList />
        <ChatWindow />
      </div>
    </div>
  );
}

export default App;
