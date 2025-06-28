import React from "react";
import { FileText } from "lucide-react";

const Directory: React.FC = () => {
  const files = [
    { name: "i9.pdf", type: "PDF", color: "text-red-500" },
    { name: "Screenshot.png", type: "PNG", color: "text-green-500" },
    { name: "sharefile.docx", type: "DOC", color: "text-blue-500" },
  ];

  return (
    <div className="w-full sm:w-1/2 lg:w-1/5 p-5 border-t lg:border-t-0 lg:border-l border-gray-200 bg-white space-y-6">
      
      {/* 👥 Team Members Section */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Team Members</h2>
        <div className="space-y-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded">
              <div className="w-8 h-8 bg-indigo-500 text-white text-xs font-bold rounded-full flex items-center justify-center shadow">
                {`U${i + 1}`}
              </div>
              <div className="text-sm">
                <div className="font-medium text-gray-800">Full Name</div>
                <div className="text-gray-400 text-xs">Job Description</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 📁 Files Section */}
      <div>
        <h2 className="text-lg font-semibold mb-3">Files</h2>
        <ul className="text-sm space-y-2">
          {files.map((file, i) => (
            <li
              key={i}
              className="flex justify-between items-center p-2 bg-gray-50 rounded hover:bg-gray-100 transition"
            >
              <div className="flex items-center gap-2 text-gray-700">
                <FileText className="w-4 h-4" />
                {file.name}
              </div>
              <span className={`${file.color} text-xs font-semibold`}>{file.type}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Directory;
