import React from "react";

interface MessageItem {
  name: string;
  message: string;
  tags: string[];
}

const messages: MessageItem[] = [
  {
    name: "Alice Johnson",
    message: "Can you review this PR?",
    tags: ["Help wanted", "Urgent"],
  },
  {
    name: "Bob Smith",
    message: "Final design is ready!",
    tags: ["Design", "Review"],
  },
  {
    name: "Charlie Green",
    message: "Let’s sync at 4 PM",
    tags: ["Meeting"],
  },
  {
    name: "Dora Lee",
    message: "Updated docs are live",
    tags: ["Docs"],
  },
  {
    name: "Ella Rivera",
    message: "Ping me when you're free",
    tags: ["Develop"],
  },
];

// Utility function to extract initials
const getInitials = (name: string): string =>
  name.split(" ").map((word) => word[0]).join("").toUpperCase();

const MessageList: React.FC = () => {
  return (
    <div className="w-1/5 bg-white border-r p-4 overflow-y-auto">
<div className="flex items-center justify-between mb-4">
  <div className="flex items-center gap-2">
    <h2 className="text-lg font-semibold">Messages</h2>
    {/* Down arrow */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 text-gray-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>

    {/* Unread count badge */}
    <span className="text-xs bg-orange-500 text-white px-2 py-0.5 rounded-full">
      3
    </span>
  </div>

  {/* Plus icon */}
  <button
    title="New Message"
    className="text-gray-500 hover:text-orange-600 transition"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
    </svg>
  </button>
</div>


      <input
        type="search"
        placeholder="Search Messages"
        className="w-full mb-4 px-2 py-1 border rounded text-sm bo"
      />

      <div className="space-y-4">
        {messages.map((msg, i) => (
          <div key={i} className="border-b pb-2 flex gap-3 items-start">
            {/* Avatar */}
            <div className="w-9 h-9 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
              {getInitials(msg.name)}
            </div>

            {/* Name + Message + Tags */}
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-800">{msg.name}</div>
              <div className="text-xs text-gray-500">{msg.message}</div>
              <div className="flex gap-1 mt-1 flex-wrap">
                {msg.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="text-xs text-orange-500 bg-gray-200 text-gray-600 px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageList;
