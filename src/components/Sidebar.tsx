import React from "react";

const Sidebar: React.FC = () => {
  const items = Array.from({ length: 6 });

  return (
    <div className="w-1/5 bg-white border-r p-4">
      <h2 className="text-lg font-semibold mb-4">Messages</h2>
      {items.map((_, i) => (
        <div key={i} className="mb-4">
          <div className="text-sm font-medium">Full name here</div>
          <div className="text-xs text-gray-500">Enter your message here</div>
          <div className="flex gap-1 mt-1">
            <span className="text-xs bg-yellow-200 text-yellow-800 px-2 py-0.5 rounded">Question</span>
            <span className="text-xs bg-green-200 text-green-800 px-2 py-0.5 rounded">Help wanted</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
