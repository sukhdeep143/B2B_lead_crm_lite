import React from "react";
import { PanelRight, BriefcaseBusiness } from "lucide-react";

export default function Navbar({ toggleSidebar }) {
  return (
    <header className="flex justify-between items-center p-4 border-b border-gray-200 shadow-sm bg-white">
      <div className="flex items-center gap-4">
        <div className="text-lg font-semibold flex items-center gap-2"><BriefcaseBusiness/>Lead CRM Lite</div>
        <button className="" onClick={toggleSidebar}>
          <PanelRight className="w-5 h-5 text-gray-500" />
        </button>
      </div>
      <button className="bg-gray-100 px-4 py-1 rounded text-sm font-medium">Logout</button>
    </header>
  );
}
