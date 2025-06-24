import React from "react";
import { PanelRight, BriefcaseBusiness } from "lucide-react";

export default function Navbar({ toggleSidebar }) {
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
      <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded text-sm font-medium">
        Logout
      </button>
    </header>
  );
}
