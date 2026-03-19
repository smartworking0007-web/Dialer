'use client';
import { Download, FileSpreadsheet, FileJson } from 'lucide-react';
import { useState } from 'react';

export default function ExportReports() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full sm:w-auto">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-primary text-white px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-lg hover:opacity-90 active:scale-95 transition-all"
      >
        <Download size={16} /> Export Reports
      </button>

      {isOpen && (
        <div className="absolute right-0 bottom-14 sm:bottom-auto sm:top-14 w-full sm:w-48 bg-white border border-slate-200 rounded-2xl shadow-2xl z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-[10px] font-black uppercase text-slate-600 hover:bg-slate-50 border-b border-slate-50">
            <FileSpreadsheet size={14} className="text-brand-success" /> Export as Excel
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-[10px] font-black uppercase text-slate-600 hover:bg-slate-50">
            <FileJson size={14} className="text-brand-primary" /> Export as JSON
          </button>
        </div>
      )}
    </div>
  );
}