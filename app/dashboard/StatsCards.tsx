import { PhoneOutgoing, Clock, Target, CreditCard } from 'lucide-react';

const stats = [
  { label: 'Calls', val: '2,840', icon: PhoneOutgoing, color: 'text-brand-primary', bg: 'bg-blue-50' },
  { label: 'Talk Time', val: '04:12', icon: Clock, color: 'text-brand-success', bg: 'bg-emerald-50' },
  { label: 'Lead Conv.', val: '128', icon: Target, color: 'text-brand-warning', bg: 'bg-amber-50' },
  { label: 'Revenue', val: '$14.2k', icon: CreditCard, color: 'text-brand-danger', bg: 'bg-red-50' },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
      {stats.map((s) => (
        <div key={s.label} className="bg-white p-4 lg:p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-brand-primary/30 transition-colors">
          <div className="flex flex-col gap-3">
            <div className={`w-10 h-10 flex items-center justify-center rounded-xl ${s.bg} ${s.color}`}>
              <s.icon size={20} />
            </div>
            <div>
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{s.label}</p>
              <h3 className="text-lg lg:text-xl font-black text-brand-primary leading-none mt-1">{s.val}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}