"use client";
import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";

export default function Topbar() {
  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
      {/* Search */}
      <div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg w-1/3">
        <FaSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none w-full"
        />
      </div>

      {/* Right */}
      <div className="flex items-center space-x-6">
        <div className="relative">
          <FaBell className="text-gray-600 text-lg cursor-pointer" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
            3
          </span>
        </div>
        <FaUserCircle className="text-gray-600 text-3xl cursor-pointer" />
      </div>
    </div>
  );
}
