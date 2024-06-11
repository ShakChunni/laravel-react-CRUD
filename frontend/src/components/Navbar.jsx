import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">React with Laravel</h1>
        <div className="flex items-center">
          <Link to="/" className="text-white mx-4 hover:text-gray-300">
            Home
          </Link>
          <Link
            to="/create-post"
            className="text-white mx-4 hover:text-gray-300"
          >
            Create Post
          </Link>
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-700 text-white py-1 px-2 rounded focus:outline-none focus:bg-gray-900"
          />
          <button className="bg-gray-700 text-white py-1 px-4 ml-2 rounded hover:bg-gray-600 focus:outline-none">
            Search
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
