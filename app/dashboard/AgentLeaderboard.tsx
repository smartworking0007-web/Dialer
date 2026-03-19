import { Award } from 'lucide-react';

const agents = [
  { id: 1, name: 'Robert Fox', sales: '$12.4k', calls: 142, color: 'bg-yellow-500' },
  { id: 2, name: 'Jane Cooper', sales: '$9.8k', calls: 128, color: 'bg-slate-300' },
  { id: 3, name: 'Wade Warren', sales: '$7.2k', calls: 98, color: 'bg-orange-400' },
];

export default function AgentLeaderboard() {
  return (
    <div className="space-y-5">
      {agents.map((agent, index) => (
        <div key={agent.id} className="flex items-center justify-between group p-2 hover:bg-slate-50 rounded-2xl transition-all">
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-xl ${agent.color} flex items-center justify-center text-white font-black text-xs shadow-sm`}>
              {index + 1}
            </div>
            <div>
              <p className="text-xs font-black text-brand-primary uppercase tracking-tight">{agent.name}</p>
              <p className="text-[9px] text-slate-400 font-bold uppercase">{agent.calls} Calls</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm font-black text-slate-900 leading-none">{agent.sales}</p>
            <div className="flex items-center gap-1 text-[8px] text-brand-success font-black justify-end mt-1 uppercase">
              <Award size={8} /> Top Node
            </div>
          </div>
        </div>
      ))}
      <button className="w-full py-3 mt-4 text-[10px] font-black text-slate-400 hover:text-brand-primary border-t border-slate-50 transition-all uppercase tracking-widest">
        View All Performance
      </button>
    </div>
  );
}