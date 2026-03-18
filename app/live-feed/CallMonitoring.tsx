'use client';
import { Activity, Zap, TrendingUp, Users } from 'lucide-react';

const metrics = [
  { label: 'Live Dials', val: '42', icon: Activity, color: 'text-brand-danger' },
  { label: 'Avg Answer Rate', val: '64%', icon: Zap, color: 'text-brand-warning' },
  { label: 'Goal Progress', val: '88%', icon: TrendingUp, color: 'text-brand-success' },
  { label: 'Queue Size', val: '12', icon: Users, color: 'text-brand-primary' },
];

export default function CallMonitoring() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {metrics.map((m) => (
        <div key={m.label} className="bg-white p-4 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between group hover:border-brand-primary transition-all">
          <div className="flex justify-between items-start">
            <div className={`p-2 rounded-xl bg-slate-50 ${m.color}`}>
              <m.icon size={18} />
            </div>
            <div className="h-1.5 w-1.5 rounded-full bg-brand-success animate-ping" />
          </div>
          <div className="mt-4">
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none">{m.label}</p>
            <p className="text-xl font-black text-brand-primary mt-1">{m.val}</p>
          </div>
        </div>
      ))}
    </div>
  );
}