import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Instructions = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="mb-6 w-full max-w-lg">
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full bg-blue-500 text-white px-5 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-200 ease-in-out"
        >
          How to Use
          {isOpen ? (
            <MdKeyboardArrowUp size={24} />
          ) : (
            <MdKeyboardArrowDown size={24} />
          )}
        </button>

        {/* Collapsible Instructions */}
        {isOpen && (
          <div className="bg-gray-100 p-5 rounded-lg shadow-md mt-3">
            <h2 className="text-xl font-semibold text-gray-800">
              📢 Instructions
            </h2>
            <p className="text-gray-700 mt-3 leading-relaxed">
              This is a prototype of an AI-powered Data Query Dashboard. You can
              type any business-related question in the search box below. The
              system will simulate an AI response based on keywords detected.
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-3 space-y-2">
              <li>
                Try asking about <strong>sales, profit, customers</strong>, etc.
              </li>
              <li>
                If the AI doesn't recognize the question, it will show an error.
              </li>
              <li>
                The app simulates instant query processing & result
                visualization.
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Instructions;
