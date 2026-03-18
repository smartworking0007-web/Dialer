'use client';

const agents = [
  { name: 'ROBERT FOX', rating: 92, calls: 450, deals: 42 },
  { name: 'JANE COOPER', rating: 88, calls: 410, deals: 38 },
  { name: 'WADE WARREN', rating: 75, calls: 380, deals: 24 },
];

export default function AgentPerformance() {
  return (
    <div className="space-y-8">
      {agents.map((agent) => (
        <div key={agent.name} className="space-y-3">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-sm font-black text-brand-primary uppercase tracking-tight">{agent.name}</p>
              <p className="text-[10px] font-black text-slate-400 uppercase">{agent.calls} Dials • {agent.deals} Deals</p>
            </div>
            <p className="text-sm font-black text-brand-primary">{agent.rating}% SCORE</p>
          </div>
          <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200">
            <div 
              className={`h-full rounded-full transition-all duration-1000 ${
                agent.rating > 85 ? 'bg-brand-success' : 'bg-brand-warning'
              }`}
              style={{ width: `${agent.rating}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}