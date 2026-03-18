import ActiveCallsTable from './ActiveCallsTable';
import AgentStatusPanel from './AgentStatusPanel';
import CallMonitoring from './CallMonitoring';

export default function LiveFeedPage() {
  return (
    <div className="max-w-400 mx-auto space-y-6 lg:space-y-8 animate-in fade-in duration-500 px-4 lg:px-0 pb-10">
      
      {/* Responsive Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <h1 className="text-xl lg:text-2xl font-black text-brand-primary uppercase tracking-tight flex items-center gap-3">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-danger opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-danger"></span>
            </div>
            LIVE MONITORING
          </h1>
          <p className="text-slate-500 text-[10px] font-black tracking-widest uppercase mt-1">
            Real-time Fleet Status & Supervision
          </p>
        </div>
        
        <div className="w-full sm:w-auto flex justify-between sm:flex-col items-center sm:items-end bg-slate-50 sm:bg-transparent p-3 sm:p-0 rounded-2xl">
          <p className="text-[9px] lg:text-[10px] font-black text-slate-400 uppercase tracking-tighter">
            Server: Mumbai-Zone-1
          </p>
          <p className="text-[9px] lg:text-[10px] font-black text-brand-success uppercase tracking-tighter">
            Latency: 24ms
          </p>
        </div>
      </div>

      {/* Top Stats: Scrollable on mobile */}
      <CallMonitoring />

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 lg:gap-8">
        {/* Main Feed: Takes full width on mobile, 3/4 on desktop */}
        <div className="xl:col-span-3 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <h2 className="text-xs font-black text-brand-primary uppercase tracking-widest">Active Call Nodes</h2>
            <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-brand-success" />
                <span className="text-[9px] font-black text-slate-400 uppercase">Synchronized</span>
            </div>
          </div>
          <ActiveCallsTable />
        </div>

        {/* Status Panel: Stacks at the bottom on mobile */}
        <div className="xl:col-span-1">
           <AgentStatusPanel />
        </div>
      </div>
    </div>
  );
}