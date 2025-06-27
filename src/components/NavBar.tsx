import React from "react";
import {
  Home,
  MessageSquare,
  Users,
  Folder,
  Bell,
  Settings,
  HelpCircle,
  ArrowLeft,
} from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <div className="w-16 h-screen bg-white border-r border-gray-200 flex flex-col items-center py-6 justify-between shadow-sm">
      {/* 🔝 Top - Logo + Nav Icons */}
      <div className="space-y-6">
        {/* Logo */}
        <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center text-lg font-bold shadow">
          M
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-6 mt-6">
          {[
            { icon: <Home size={20} />, label: "Home" },
            { icon: <MessageSquare size={20} />, label: "Messages" },
            { icon: <Users size={20} />, label: "Users" },
            { icon: <Folder size={20} />, label: "Files" },
          ].map((item, index) => (
            <button
              key={index}
              className="group relative text-gray-500 hover:text-indigo-600 transition"
              title={item.label}
            >
              <div className="p-2 rounded-full group-hover:bg-indigo-50 transition">
                {item.icon}
              </div>
            </button>
          ))}
        </nav>
      </div>

      {/* ⚙️ Bottom - Utility Icons */}
      <div className="flex flex-col gap-5 mb-4">
        {[
          { icon: <Bell size={20} />, label: "Notifications" },
          { icon: <HelpCircle size={20} />, label: "Help" },
          { icon: <Settings size={20} />, label: "Settings" },
          { icon: <ArrowLeft size={20} />, label: "Collapse" },
        ].map((item, index) => (
          <button
            key={index}
            className="group relative text-gray-500 hover:text-indigo-600 transition"
            title={item.label}
          >
            <div className="p-2 rounded-full group-hover:bg-indigo-50 transition">
              {item.icon}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
