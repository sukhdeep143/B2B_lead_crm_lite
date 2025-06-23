import React from 'react';
import { Link } from 'react-router-dom';
// import profileImage from '../assets/profile.png'; // Make sure to add an image in public or assets folder

const Header = () => {
  return (
    <header className="bg-blue-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          B2B Lead CRM Lite
        </Link>
        <div className="flex items-center space-x-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/profile">
            <img
              src="/vite.svg"
              alt="Profile"
              className="w-8 h-8 rounded-full border-2 border-white hover:border-gray-300"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
