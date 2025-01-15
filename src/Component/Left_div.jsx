import React from "react";
import gif from "./icons8-react.gif";

function Left_div({ isNightMode }) {
  return (
    <div
      className={`w-64 h-fit-content p-6 ${
        isNightMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Profile Section */}
      <div className="flex flex-col items-center">
        <img src={gif} alt="Profile" className="w-20 h-20 rounded-full mb-4" />
        <h2 className="text-lg font-semibold">Hey, ABCD</h2>
      </div>

      {/* Navigation Menu */}
      <nav className="mt-6 space-y-4">
        {/* Static Navigation Items */}
        <button
          className={`flex items-center gap-3 w-full text-left py-2 px-4 rounded-md ${
            isNightMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
          } transition`}
        >
          📋 All Tasks
        </button>
        <button
          className={`flex items-center gap-3 w-full text-left py-2 px-4 rounded-md ${
            isNightMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
          } transition`}
        >
          📅 Today
        </button>
        <button
          className={`flex items-center gap-3 w-full text-left py-2 px-4 rounded-md ${
            isNightMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
          } transition`}
        >
          ⭐ Important
        </button>
        <button
          className={`flex items-center gap-3 w-full text-left py-2 px-4 rounded-md ${
            isNightMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
          } transition`}
        >
          📚 Planned
        </button>
        <button
          className={`flex items-center gap-3 w-full text-left py-2 px-4 rounded-md ${
            isNightMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
          } transition`}
        >
          👤 Assigned to Me
        </button>
      </nav>

      {/* Add List Button */}
      <div className="mt-6">
        <button className="w-full py-2 px-4 border border-lime-500 text-lime-500 rounded-md hover:bg-lime-500 hover:text-white transition">
          + Add List
        </button>
      </div>

      {/* Task Overview Section */}
      <div className="mt-6">
        <h3 className="font-semibold mb-4">Today Tasks</h3>
        {/* Circular Chart */}
        <div className="relative w-40 h-40 mx-auto">
          <svg
            viewBox="0 0 36 36"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background Circle */}
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              stroke="#ddd"
              strokeWidth="2"
            />
            {/* Progress Circle */}
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              stroke="green"
              strokeWidth="2"
              strokeDasharray="75,100" // Adjust values for completion
            />
          </svg>
        </div>
        {/* Task Details */}
        <div className="text-center mt-4">
          <p className="text-lg font-bold">11</p>
          <p className="text-sm">Pending & Done</p>
        </div>
      </div>
    </div>
  );
}

export default Left_div;
