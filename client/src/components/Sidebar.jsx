import React from "react";
import { Home, Plus, User } from "lucide-react";
import { Link } from "react-router-dom";



export default function Sidebar({ isOpen }) {
    return (
      <aside
        className={`${
          isOpen ? "block" : "hidden"
        }  bg-white border-r-2 border-gray-100 h-full px-4 py-2 transition-all duration-300`}
      >
        <nav className="space-y-4">
          <ul className="space-y-2">
            <Link
              to="/dashboard"
              className="flex items-center px-2 py-1 gap-3 hover:bg-blue-50 rounded font-medium text-gray-700"
            >
              <Home className="w-5 h-5" /> <span>Dashboard</span>
            </Link>
            <Link
              to="#"
              className="flex items-center px-2 py-1 gap-3 hover:bg-blue-50 rounded font-medium text-gray-700"
            >
              <Plus className="w-5 h-5" /> <span>Create New User</span>
            </Link>
            <Link
              to="/profile"
              className="flex items-center px-2 py-1 gap-3 hover:bg-blue-50 rounded font-medium text-gray-700"
            >
              <User className="w-5 h-5" /> <span>Profile</span>
            </Link>
          </ul>
        </nav>
      </aside>
    );
  }
  