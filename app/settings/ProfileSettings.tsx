'use client';
import { User, Camera } from 'lucide-react';

export default function ProfileSettings() {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-5 lg:p-8 shadow-sm">
      <div className="flex items-center gap-2 mb-8 border-b border-slate-50 pb-4">
        <User size={18} className="text-brand-warning" /> 
        <h2 className="text-sm font-black text-brand-primary uppercase tracking-widest">Personal Profile</h2>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start text-center lg:text-left">
        {/* Avatar Section */}
        <div className="relative group shrink-0">
          {/* Optimized: Using rounded-4xl for 2rem border radius */}
          <div className="w-24 h-24 lg:w-28 lg:h-28 bg-brand-primary rounded-3xl lg:rounded-4xl flex items-center justify-center text-white text-3xl font-black shadow-xl shadow-brand-primary/10 transition-all group-hover:scale-105">
            SM
          </div>
          <button className="absolute -bottom-2 -right-2 p-2.5 bg-brand-warning text-brand-primary rounded-xl lg:rounded-2xl shadow-lg border-4 border-white hover:rotate-12 active:scale-90 transition-all">
            <Camera size={16} />
          </button>
        </div>

        {/* Fields Grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block ml-1">Full Name</label>
            <input 
              type="text" 
              defaultValue="Sumit Mishra" 
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm font-bold focus:ring-2 focus:ring-brand-primary outline-none transition-all uppercase placeholder:text-slate-300" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block ml-1">Agent ID</label>
            <input 
              type="text" 
              defaultValue="MK-402" 
              disabled 
              className="w-full bg-slate-100 border border-slate-200 rounded-2xl px-4 py-3 text-sm font-black text-slate-400 cursor-not-allowed uppercase" 
            />
          </div>
          <div className="sm:col-span-2 flex justify-center lg:justify-end mt-4">
            <button className="w-full sm:w-auto bg-brand-primary text-white px-10 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-brand-primary/20">
              Save Profile Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}