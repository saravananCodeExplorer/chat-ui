import React, { useState, useRef, useEffect } from "react";

interface ChatMessage {
  id: number;
  sender: "me" | "them";
  text: string;
  time?: string;
}

const initialMessages: ChatMessage[] = [
  { id: 1, sender: "them", text: "Hey! How's it going?", time: "10:01 AM" },
  { id: 2, sender: "me", text: "Great! What about you?", time: "10:02 AM" },
  { id: 3, sender: "them", text: "All good here. Ready for the meeting?", time: "10:05 AM" },
  { id: 4, sender: "me", text: "Almost, just finishing some notes.", time: "10:06 AM" },
];

const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Scroll to bottom when new message added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (newMessage.trim() === "") return;
    const msg: ChatMessage = {
      id: messages.length + 1,
      sender: "me",
      text: newMessage.trim(),
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages([...messages, msg]);
    setNewMessage("");
  };

  return (
    <div className="flex flex-col w-full lg:w-3/5 h-full p-6 bg-gradient-to-br from-white to-gray-50 border-r border-gray-200">
      
      {/* 🔵 Chat Header */}
      <div className="flex items-center justify-between mb-4 border-b pb-3">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm shadow">
            TM
          </div>
          {/* Name & Status */}
          <div>
            <div className="font-semibold text-gray-800 text-sm">Team Member</div>
            <div className="text-xs text-green-500 flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Online
            </div>
          </div>
        </div>

        {/* 3-dot icon (menu placeholder) */}
        <div className="text-gray-400 hover:text-gray-600 cursor-pointer text-xl font-bold">⋮</div>
      </div>

      {/* 💬 Chat Messages */}
      <div className="flex-1 overflow-y-auto pr-2 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}>
            <div className={`flex items-end gap-2 ${msg.sender === "me" ? "flex-row-reverse" : ""}`}>
              {/* Avatar */}
              <div className="w-8 h-8 bg-orange-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                {msg.sender === "me" ? "ME" : "TM"}
              </div>
              {/* Message Bubble */}
              <div className={`max-w-xs px-4 py-2 rounded-lg shadow text-sm relative
                ${msg.sender === "me"
                  ? "bg-indigo-600 text-white rounded-br-none"
                  : "bg-white border text-gray-800 rounded-bl-none"}
              `}>
                {msg.text}
                <div className="text-[10px] text-right mt-1 opacity-70">{msg.time}</div>
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* 📝 Message Input */}
      <div className="mt-5 flex items-center gap-2">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          className="flex-1 px-4 py-2 text-sm rounded-full border shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="Type your message..."
        />
        <button
          onClick={sendMessage}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full text-sm shadow transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
