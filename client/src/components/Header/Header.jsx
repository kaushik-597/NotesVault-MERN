import React from "react";
import { NotebookText } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-slate-900 text-slate-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-3">
        <div className="bg-slate-800 p-2 rounded-lg border border-slate-700">
          <NotebookText size={24} className="text-slate-300" />
        </div>
        <h1 className="text-xl font-medium tracking-wide">Flow Notes</h1>
      </div>
    </header>
  );
};

export default Header;
