import React, { useState } from "react";
import { IoMenuOutline, IoSearch } from "react-icons/io5"; // Importing menu and search icons
import { LuMoonStar } from "react-icons/lu"; // Moon/star icon for dark mode
import { PiSquaresFourDuotone } from "react-icons/pi"; // Grid icon
import gif from "./icons8-react.gif"; // Logo
import Left_div from "./Left_div";
import Todo from "./Todo";

function Navbar() {
  const [isNightMode, setIsNightMode] = useState(false); // Night mode state

  return (
    <div
      className={`py-6${
        isNightMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } transition-all duration-300`}
    >
      <div
        className={`flex items-center justify-between py-6 ${
          isNightMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        } transition-all duration-300`}
      >
        {/* Left section: Menu and Logo */}
        <div className="flex items-center gap-5">
          {/* Menu button */}
          <button
            className={`hover:scale-125 hover:rotate-12 transition-transform duration-300 ${
              isNightMode ? "text-white" : "text-gray-900"
            }`}
          >
            <IoMenuOutline size={30} />
          </button>

          {/* Logo */}
          <div className="flex items-center gap-3 font-mono">
            <div
              className={`w-10 h-10 transform hover:scale-125 hover:rotate-6 transition-all duration-300 ${
                isNightMode ? "bg-white" : "bg-gray-900"
              } rounded-full`}
            >
              <img
                src={gif}
                className="object-contain w-full h-full"
                alt="DoIt Logo"
              />
            </div>
            <div
              className={`text-2xl font-bold ${
                isNightMode ? "text-lime-400" : "text-lime-500"
              }`}
            >
              DoIt
            </div>
          </div>
        </div>

        {/* Right section: Search, Grid, and Night Mode Toggle */}
        <div className="flex items-center gap-6">
          {/* Search button */}
          <button
            className={`hover:scale-125 hover:rotate-6 transition-transform duration-300 ${
              isNightMode ? "text-white" : "text-gray-900"
            }`}
          >
            <IoSearch size={25} />
          </button>

          {/* Grid icon */}
          <button
            className={`hover:scale-125 hover:rotate-6 transition-transform duration-300 ${
              isNightMode ? "text-white" : "text-gray-900"
            }`}
          >
            <PiSquaresFourDuotone size={25} />
          </button>

          {/* Night/Day mode toggle button */}
          <button
            onClick={() => setIsNightMode(!isNightMode)}
            className={`hover:scale-125 hover:rotate-6 transition-transform duration-300 p-2 rounded-full ${
              isNightMode
                ? "bg-gray-800 text-yellow-300"
                : "bg-gray-100 text-gray-900"
            }`}
          >
            <LuMoonStar size={25} />
          </button>
        </div>
      </div>
      <div className="flex">
        <Left_div isNightMode={isNightMode}></Left_div>
        <Todo isNightMode={isNightMode} />
      </div>
    </div>
  );
}

export default Navbar;
