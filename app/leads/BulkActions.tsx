'use client';
import { Trash2, PhoneForwarded, Tag, X } from 'lucide-react';

export default function BulkActions({ selectedCount }: { selectedCount: number }) {
  if (selectedCount === 0) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-60 w-[95%] max-w-2xl animate-in slide-in-from-bottom-10">
      <div className="bg-brand-primary text-white p-4 rounded-3xl shadow-2xl flex items-center justify-between gap-4 border border-white/10 backdrop-blur-md">
        <div className="flex items-center gap-4 pl-2">
          <div className="bg-brand-warning text-brand-primary w-8 h-8 rounded-xl flex items-center justify-center font-black text-xs shadow-inner">
            {selectedCount}
          </div>
          <p className="text-[10px] font-black uppercase tracking-widest hidden sm:block">Leads Selected</p>
        </div>

        <div className="flex items-center gap-1 sm:gap-3">
          <button className="p-2.5 hover:bg-white/10 rounded-xl transition-all" title="Assign to Campaign">
            <PhoneForwarded size={18} />
          </button>
          <button className="p-2.5 hover:bg-white/10 rounded-xl transition-all" title="Add Tag">
            <Tag size={18} />
          </button>
          <div className="w-px h-6 bg-white/20 mx-1" />
          <button className="bg-brand-danger px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-brand-danger/20">
            <Trash2 size={14} /> <span className="hidden xs:inline">Delete</span>
          </button>
          {/* Fixed: Used the 'X' icon here */}
          <button className="ml-2 p-1 text-white/40 hover:text-white transition-colors">
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}