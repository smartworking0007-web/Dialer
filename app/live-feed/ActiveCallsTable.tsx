'use client';
import { Headphones, Mic2, PhoneOff } from 'lucide-react';

const activeCalls = [
  { id: 1, agent: 'Suresh Kumar', lead: 'Rohan Mehta', duration: '05:42', type: 'Outbound', sentiment: 'Positive' },
  { id: 2, agent: 'Anjali Rai', lead: 'Tech Solutions', duration: '02:15', type: 'Manual', sentiment: 'Neutral' },
  { id: 3, agent: 'Vikram Dev', lead: 'Sonia Gandhi', duration: '00:45', type: 'Auto-Dial', sentiment: 'Negative' },
  { id: 4, agent: 'Pooja Hegde', lead: 'Global Exports', duration: '08:20', type: 'Outbound', sentiment: 'Positive' },
];

export default function ActiveCallsTable() {
  return (
    <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
      <div className="p-6 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
        <h3 className="text-sm font-black text-brand-primary uppercase tracking-widest">Active Call Nodes</h3>
        <span className="bg-brand-primary text-white text-[9px] font-black px-2 py-1 rounded">LIVE: 04</span>
      </div>
      
      {/* Replaced min-w-[700px] with min-w-175 for v4 optimization */}
      <div className="overflow-x-auto no-scrollbar">
        <table className="w-full text-left border-collapse min-w-175">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase">Agent Name</th>
              <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase">Connected Lead</th>
              <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase">Duration</th>
              <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase">Sentiment</th>
              <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase text-right">Supervision</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50 font-bold">
            {activeCalls.map((call) => (
              <tr key={call.id} className="hover:bg-slate-50/80 transition-colors group">
                <td className="px-6 py-5">
                  <p className="font-black text-brand-primary text-sm uppercase tracking-tight">{call.agent}</p>
                  <p className="text-[9px] text-slate-400 font-bold uppercase tracking-tighter">{call.type}</p>
                </td>
                <td className="px-6 py-5 text-sm text-slate-700">
                  {call.lead}
                </td>
                <td className="px-6 py-5 font-mono text-sm text-brand-primary">
                  {call.duration}
                </td>
                <td className="px-6 py-5">
                  <span className={`text-[10px] font-black uppercase px-2 py-1 rounded border ${
                    call.sentiment === 'Positive' ? 'text-brand-success border-brand-success/20 bg-brand-success/5' :
                    call.sentiment === 'Negative' ? 'text-brand-danger border-brand-danger/20 bg-brand-danger/5' :
                    'text-brand-warning border-brand-warning/20 bg-brand-warning/5'
                  }`}>
                    {call.sentiment}
                  </span>
                </td>
                <td className="px-6 py-5 text-right">
                  <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 bg-brand-primary/10 text-brand-primary rounded-xl hover:bg-brand-primary hover:text-white transition-all">
                      <Headphones size={14} />
                    </button>
                    <button className="p-2 bg-brand-warning/10 text-brand-warning rounded-xl hover:bg-brand-warning hover:text-white transition-all">
                      <Mic2 size={14} />
                    </button>
                    <button className="p-2 bg-brand-danger/10 text-brand-danger rounded-xl hover:bg-brand-danger hover:text-white transition-all">
                      <PhoneOff size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}