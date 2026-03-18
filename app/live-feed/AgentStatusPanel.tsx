'use client';
import { UserCheck, UserMinus, PhoneIncoming } from 'lucide-react';

export default function AgentStatusPanel() {
  const stats = [
    { label: 'Agents Online', count: 24, color: 'text-brand-success', bg: 'bg-emerald-50' },
    { label: 'In Call', count: 18, color: 'text-brand-primary', bg: 'bg-blue-50' },
    { label: 'On Break', count: 4, color: 'text-brand-warning', bg: 'bg-amber-50' },
    { label: 'Offline', count: 2, color: 'text-brand-danger', bg: 'bg-red-50' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-brand-primary rounded-3xl p-6 text-white shadow-xl">
        <h3 className="text-xs font-black uppercase tracking-widest mb-6 border-b border-white/10 pb-2 text-white/60">Fleet Summary</h3>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="p-3 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-[8px] font-black uppercase text-white/40 tracking-widest mb-1">{s.label}</p>
              <p className="text-xl font-black">{s.count}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-3xl p-6 border border-slate-200">
        <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Quick Insights</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-600">Avg. Wrap-up Time</span>
            <span className="text-xs font-black text-brand-primary">45s</span>
          </div>
          <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
            <div className="bg-brand-primary w-[70%] h-full" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-600">Goal Achievement</span>
            <span className="text-xs font-black text-brand-success">82%</span>
          </div>
          <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
            <div className="bg-brand-success w-[82%] h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}