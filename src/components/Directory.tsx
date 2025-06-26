import React from "react";

const Directory: React.FC = () => {
  const files = [
    { name: "i9.pdf", type: "PDF", color: "text-red-500" },
    { name: "Screenshot.png", type: "PNG", color: "text-green-500" },
    { name: "sharefile.docx", type: "DOC", color: "text-blue-500" },
  ];

  return (
    <div className="w-full sm:w-1/2 lg:w-1/5 p-4 border-t lg:border-t-0 lg:border-l border-gray-200 bg-white">
      {/* Team Members Section */}
      <h2 className="text-lg font-semibold mb-4">Team Members</h2>
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="mb-2 text-sm">
          <div className="font-medium">Full name here</div>
          <div className="text-gray-400 text-xs">Job Description here</div>
        </div>
      ))}

      {/* Files Section */}
      <h2 className="text-lg font-semibold mt-6 mb-2">Files</h2>
      <ul className="text-sm space-y-1">
        {files.map((file, i) => (
          <li key={i} className="flex justify-between items-center">
            <span>{file.name}</span>
            <span className={`${file.color} text-xs`}>{file.type}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Directory;
