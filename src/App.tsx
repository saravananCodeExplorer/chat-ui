import React from "react";
import Sidebar from "./components/Sidebar";
import ChatArea from "./components/ChatArea";
import Directory from "./components/Directory";
import Navbar from "./components/NavBar";
import MessageList from "./components/MessageList";

const App: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100 text-gray-800">
      <Navbar/>
      <MessageList/>
      {/* <Sidebar /> */}
      <ChatArea />
      <Directory />
    </div>
  );
};

export default App;
