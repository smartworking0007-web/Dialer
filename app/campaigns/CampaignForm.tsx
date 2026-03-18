'use client';
import { PlusCircle, UploadCloud } from 'lucide-react';

export default function CampaignForm() {
  return (
    <div className="bg-white rounded-3xl p-6 border-2 border-brand-primary shadow-xl sticky top-8">
      <h3 className="text-xl font-black text-brand-primary uppercase tracking-tighter mb-6 border-b-2 border-brand-primary pb-2">NEW CAMPAIGN</h3>
      
      <div className="space-y-5">
        <div>
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Campaign Name</label>
          <input 
            type="text" 
            placeholder="ENTER CAMPAIGN NAME" 
            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm font-bold focus:ring-2 focus:ring-brand-primary outline-none placeholder:text-slate-300 uppercase"
          />
        </div>

        <div>
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Agent Group</label>
          <select className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm font-bold focus:ring-2 focus:ring-brand-primary outline-none uppercase">
            <option>DELHI SALES TEAM</option>
            <option>MUMBAI SALES TEAM</option>
            <option>REMOTE AGENTS</option>
          </select>
        </div>

        <div className="border-2 border-dashed border-slate-200 rounded-2xl p-8 text-center hover:bg-slate-50 transition-all cursor-pointer group">
          <UploadCloud size={28} className="mx-auto mb-2 text-brand-primary group-hover:scale-110 transition-transform" />
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Upload CSV Leads</p>
        </div>

        <button className="w-full bg-brand-warning text-brand-primary py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg hover:bg-yellow-500 transition-all flex items-center justify-center gap-2">
          <PlusCircle size={18} /> Launch Campaign
        </button>
      </div>
    </div>
  );
}