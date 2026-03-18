'use client';
import { Settings, Zap, RotateCcw, Clock, ShieldCheck } from 'lucide-react';

export default function CampaignSettings() {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 lg:p-8 shadow-sm space-y-8">
      <div className="border-b border-slate-100 pb-4">
        <h2 className="text-lg font-black text-brand-primary uppercase tracking-tight flex items-center gap-2">
          <Settings size={20} className="text-brand-warning" /> 
          Dialer Configuration
        </h2>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">
          Adjust performance and compliance rules
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Dialing Speed / Power */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Zap size={16} className="text-brand-primary" />
            <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Dialing Ratio</label>
          </div>
          <div className="flex items-center gap-4">
            <input type="range" min="1" max="10" defaultValue="3" className="flex-1 accent-brand-primary h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer" />
            <span className="bg-brand-primary text-white px-3 py-1 rounded-lg text-xs font-black">3:1</span>
          </div>
          <p className="text-[9px] text-slate-400 font-bold uppercase">3 Calls per available agent</p>
        </div>

        {/* Retry Logic */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <RotateCcw size={16} className="text-brand-primary" />
            <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Max Retries</label>
          </div>
          <select className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm font-bold focus:ring-2 focus:ring-brand-primary outline-none uppercase">
            <option>3 ATTEMPTS</option>
            <option>5 ATTEMPTS</option>
            <option>UNLIMITED</option>
          </select>
        </div>

        {/* Time Zone Management */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-brand-primary" />
            <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Calling Hours</label>
          </div>
          <div className="flex gap-2">
            <input type="time" defaultValue="09:00" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-3 text-xs font-bold" />
            <input type="time" defaultValue="18:00" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-3 text-xs font-bold" />
          </div>
        </div>

        {/* Recording & Compliance */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-brand-primary" />
            <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Recording Status</label>
          </div>
          <div className="flex items-center justify-between bg-slate-50 p-3 rounded-xl border border-slate-100">
            <span className="text-[10px] font-black text-slate-700 uppercase">Record All Calls</span>
            <input type="checkbox" defaultChecked className="w-5 h-5 accent-brand-success" />
          </div>
        </div>
      </div>

      <div className="pt-4 text-right">
        <button className="bg-brand-primary text-white px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-lg hover:opacity-90 active:scale-95 transition-all">
          Apply Settings
        </button>
      </div>
    </div>
  );
}