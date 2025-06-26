import React from "react";
import {
    Home,
  MessageSquare,
  Users,
  Folder,
  Bell,
  Settings,
  HelpCircle,
  ArrowLeft
} from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <div className="w-16 h-screen bg-white border-r flex flex-col items-center py-4 justify-between shadow-sm">
      {/* Top Section - Logo or Home Icon */}
      <div className="space-y-6">
        <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center text-lg font-bold">
          M
        </div>

        <nav className="flex flex-col gap-6 mt-4">
                   <button className="text-gray-600 hover:text-indigo-600">
            <Home size={24} />
          </button> 
          <button className="text-gray-600 hover:text-indigo-600">
            <MessageSquare size={24} />
          </button> 
          <button className="text-gray-600 hover:text-indigo-600">
            <Users size={24} />
          </button>
          <button className="text-gray-600 hover:text-indigo-600">
            <Folder size={24} />
          </button>
        </nav>
      </div>

      {/* Bottom Section - Settings / Help */}
      <div className="flex flex-col gap-6 mb-4">
              <button className="text-gray-600 hover:text-indigo-600">
            <Bell size={24} />
          </button>
       
        <button className="text-gray-500 hover:text-indigo-600">
          <HelpCircle size={24} />
        </button>
        <button className="text-gray-500 hover:text-indigo-600">
          <Settings size={24} />
        </button>
          <button className="text-gray-600 hover:text-indigo-600">
            <ArrowLeft size={24} />
          </button>
      </div>
    </div>
  );
};

export default Navbar;
