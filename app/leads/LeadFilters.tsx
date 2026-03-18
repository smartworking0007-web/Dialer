'use client';
import { Search, Filter, Download, Plus } from 'lucide-react';

export default function LeadFilters() {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white p-4 rounded-3xl border border-slate-200 shadow-sm">
      <div className="relative w-full md:w-96">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
        <input 
          type="text" 
          placeholder="Search leads by name or number..." 
          className="w-full pl-12 pr-4 py-3 bg-brand-bg border-none rounded-2xl text-sm focus:ring-2 focus:ring-brand-primary outline-none transition-all"
        />
      </div>

      <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto no-scrollbar">
        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 whitespace-nowrap">
          <Filter size={14} /> Filter
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 whitespace-nowrap">
          <Download size={14} /> Export
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-brand-primary text-white rounded-xl text-xs font-bold shadow-lg shadow-brand-primary/20 whitespace-nowrap">
          <Plus size={14} /> Add Lead
        </button>
      </div>
    </div>
  );
}