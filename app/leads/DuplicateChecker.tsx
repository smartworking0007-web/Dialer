'use client';
import { ShieldCheck, AlertCircle } from 'lucide-react';

export default function DuplicateChecker() {
  return (
    <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4 transition-all hover:border-brand-primary/20">
      <div className="flex items-center gap-4">
        <div className="p-3.5 bg-emerald-50 text-brand-success rounded-2xl relative">
          <ShieldCheck size={24} />
          {/* Fixed: Used 'AlertCircle' as a status indicator badge */}
          <div className="absolute -top-1 -right-1 bg-white rounded-full">
            <AlertCircle size={12} className="text-brand-warning animate-pulse" />
          </div>
        </div>
        <div>
          <h4 className="text-sm font-black text-brand-primary uppercase tracking-tight">System Guard Active</h4>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Automatic duplicate detection is scanning in background</p>
        </div>
      </div>
      
      <button className="w-full md:w-auto px-8 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-600 hover:bg-slate-100 active:scale-95 transition-all">
        Run Deep Scan
      </button>
    </div>
  );
}