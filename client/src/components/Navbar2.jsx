import React from "react";
import { PanelRight, BriefcaseBusiness } from "lucide-react";

export default function Navbar({ toggleSidebar }) {
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/";
  };
  return (
    <header className="flex  bg-blue-600 justify-between items-center p-4 border-b border-gray-200 shadow-sm text-white">
      <div className="flex items-center gap-4">
        <div className="text-lg font-semibold flex items-center gap-2">
          <BriefcaseBusiness />
          Lead CRM Lite
        </div>
        <button className="" onClick={toggleSidebar}>
          <PanelRight className="w-5 h-5 text-white" />
        </button>
      </div>
      <button
        onClick={handleLogout}
        className="ml-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
      >
        Logout
      </button>
    </header>
  );
}
