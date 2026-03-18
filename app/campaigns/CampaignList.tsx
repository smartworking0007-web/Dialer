'use client';
import { Play, Pause, Settings2, BarChart2 } from 'lucide-react';

const campaigns = [
  { id: 1, name: 'Solar Outreach - Delhi', status: 'Running', leads: '1,200', called: '450', conversion: '12%', color: 'bg-brand-success' },
  { id: 2, name: 'Personal Loan - Mumbai', status: 'Paused', leads: '5,000', called: '2,800', conversion: '8%', color: 'bg-brand-warning' },
  { id: 3, name: 'Credit Card Follow-up', status: 'Running', leads: '850', called: '120', conversion: '15%', color: 'bg-brand-success' },
];

export default function CampaignList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {campaigns.map((c) => (
        <div key={c.id} className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all">
          <div className="flex justify-between items-start mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-2 h-2 rounded-full ${c.color}`} />
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{c.status}</span>
              </div>
              <h3 className="text-xl font-black text-brand-primary uppercase tracking-tight">{c.name}</h3>
            </div>
            <button className="p-2 bg-slate-50 rounded-xl text-slate-400 hover:text-brand-primary border border-slate-100">
              <Settings2 size={16} />
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8 bg-slate-50 p-4 rounded-2xl">
            <div>
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Leads</p>
              <p className="text-base font-black text-slate-800">{c.leads}</p>
            </div>
            <div>
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Called</p>
              <p className="text-base font-black text-slate-800">{c.called}</p>
            </div>
            <div>
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Conv.</p>
              <p className="text-base font-black text-brand-success">{c.conversion}</p>
            </div>
          </div>

          <div className="flex gap-3">
            <button className="flex-1 bg-brand-primary text-white py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:opacity-90 transition-all">
              <BarChart2 size={14} className="inline mr-2" /> View Analytics
            </button>
            <button className={`w-14 py-3 rounded-2xl flex justify-center items-center text-white ${c.status === 'Running' ? 'bg-brand-danger' : 'bg-brand-success'}`}>
              {c.status === 'Running' ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" />}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}