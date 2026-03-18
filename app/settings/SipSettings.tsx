'use client';
import { Server, Globe, ShieldCheck, RefreshCw } from 'lucide-react';

export default function SipSettings() {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 lg:p-8 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-sm font-black text-brand-primary uppercase tracking-widest flex items-center gap-2">
          <Server size={18} className="text-brand-warning" /> SIP Configuration
        </h2>
        <span className="px-3 py-1 bg-brand-success/10 text-brand-success text-[10px] font-black rounded-full border border-brand-success/20">
          CONNECTED
        </span>
      </div>

      <div className="space-y-6">
        {/* SIP Server Settings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1">
              <Globe size={10} /> SIP Domain / Proxy
            </label>
            <input 
              type="text" 
              defaultValue="sip.moneyking.in" 
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold outline-none focus:ring-2 focus:ring-brand-primary transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1">
              <ShieldCheck size={10} /> SIP Port
            </label>
            <input 
              type="text" 
              defaultValue="5060" 
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold outline-none focus:ring-2 focus:ring-brand-primary transition-all"
            />
          </div>
        </div>

        {/* Credentials Section */}
        <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Authentication Status</p>
            <p className="text-xs font-bold text-slate-700 uppercase">Extension: 402 • Verified Session</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-2 bg-brand-primary text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:opacity-90 transition-all shadow-lg shadow-brand-primary/10">
            <RefreshCw size={14} /> Re-Register
          </button>
        </div>
      </div>
    </div>
  );
}