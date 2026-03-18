import StatsCards from './StatsCards';
import PerformanceGraph from './PerformanceGraph';
import AgentLeaderboard from './AgentLeaderboard';

export default function Dashboard() {
  return (
    <div className="max-w-400 mx-auto space-y-6 lg:space-y-8 pb-10">
      {/* Header: Stacks on Mobile */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-1">
        <div>
          <h1 className="text-xl lg:text-2xl font-black text-brand-primary uppercase tracking-tight">DASHBOARD</h1>
          <p className="text-[10px] lg:text-xs text-slate-500 font-black uppercase tracking-widest">Real-time Performance Metrics</p>
        </div>
        <button className="bg-brand-primary text-white px-6 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest w-full sm:w-fit shadow-lg shadow-brand-primary/20 active:scale-95 transition-all">
          Download Report
        </button>
      </div>

      {/* Stats: 2 cols on mobile, 4 on desktop */}
      <StatsCards />

      {/* Main Grid: Stacks on mobile, 3 columns on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        
        {/* Weekly Volume: Full width on mobile, spans 2 cols on desktop */}
        <div className="lg:col-span-2 bg-white p-4 lg:p-6 rounded-3xl border border-slate-200 shadow-sm">
          <div className="mb-6">
            <h2 className="font-black text-brand-primary uppercase text-sm tracking-widest">Weekly Call Volume</h2>
            <div className="h-1 w-10 bg-brand-warning mt-1 rounded-full" />
          </div>
          <div className="h-87.5 w-full">
            <PerformanceGraph />
          </div>
        </div>
        
        {/* Leaderboard: Full width on mobile, 1 col on desktop */}
        <div className="bg-white p-4 lg:p-6 rounded-3xl border border-slate-200 shadow-sm">
          <div className="mb-6">
            <h2 className="font-black text-brand-primary uppercase text-sm tracking-widest">Top Performers</h2>
            <div className="h-1 w-10 bg-brand-warning mt-1 rounded-full" />
          </div>
          <AgentLeaderboard />
        </div>
      </div>
    </div>
  );
}