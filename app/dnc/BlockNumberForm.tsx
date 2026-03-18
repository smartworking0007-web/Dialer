'use client';
import { ShieldX, AlertTriangle } from 'lucide-react';

export default function BlockNumberForm() {
  return (
    <div className="bg-white rounded-3xl p-5 lg:p-6 border-2 border-brand-danger shadow-xl xl:sticky xl:top-8 transition-all">
      <div className="flex items-center gap-3 mb-6 border-b-2 border-brand-danger pb-3">
        <ShieldX className="text-brand-danger" size={24} />
        <h3 className="text-base lg:text-lg font-black text-brand-primary uppercase tracking-tighter">RESTRICT NUMBER</h3>
      </div>
      
      <div className="space-y-5">
        <div>
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Phone Number</label>
          <input 
            type="text" 
            placeholder="+91 XXXXX XXXXX" 
            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm font-bold focus:ring-2 focus:ring-brand-danger outline-none placeholder:text-slate-300 font-mono"
          />
        </div>

        <div>
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Reason</label>
          <select className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm font-bold focus:ring-2 focus:ring-brand-danger outline-none uppercase appearance-none cursor-pointer">
            <option>CUSTOMER REQUESTED</option>
            <option>LITIGATION RISK</option>
            <option>INVALID NUMBER</option>
            <option>GOVERNMENT REGISTRY</option>
          </select>
        </div>

        <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100 flex gap-3">
          <AlertTriangle className="text-brand-warning shrink-0" size={18} />
          <p className="text-[9px] font-bold text-amber-800 uppercase leading-relaxed">
            Instant removal from all campaigns and manual dialing once confirmed.
          </p>
        </div>

        <button className="w-full bg-brand-danger text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg shadow-brand-danger/20 hover:opacity-90 active:scale-95 transition-all">
          CONFIRM BLOCK
        </button>
      </div>
    </div>
  );
}