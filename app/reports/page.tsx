import CallReports from "./CallReports";
import AgentPerformance from "./AgentPerformance";
import ExportReports from "./ExportReports";
import { FileText, TrendingUp } from "lucide-react";

export default function ReportsPage() {
  return (
    <div className="max-w-400 mx-auto space-y-8 animate-in fade-in duration-500 px-4 lg:px-0 pb-10">
      
      {/* Responsive Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
        <div>
          <h1 className="text-2xl lg:text-3xl font-black text-brand-primary uppercase tracking-tight">
            ANALYTICS HUB
          </h1>
          <p className="text-slate-500 text-[10px] font-black tracking-widest uppercase mt-1">
            Data-driven insights for Money King operations
          </p>
        </div>
        <ExportReports />
      </div>

      <div className="grid grid-cols-1 gap-8">
        
        {/* Call Statistics Table */}
        <div className="bg-white p-4 lg:p-8 rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="flex items-center gap-2 mb-8 border-b border-slate-100 pb-4">
            <FileText size={20} className="text-brand-warning" />
            <h2 className="text-sm font-black text-brand-primary uppercase tracking-widest">Detailed Call Logs</h2>
          </div>
          <CallReports />
        </div>

        {/* Agent Performance Section */}
        <div className="bg-white p-4 lg:p-8 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2">
              <TrendingUp size={20} className="text-brand-success" />
              <h2 className="text-sm font-black text-brand-primary uppercase tracking-widest">Agent Performance Index</h2>
            </div>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-50 px-3 py-1 rounded-lg">Live Ranking</span>
          </div>
          <AgentPerformance />
        </div>

      </div>
    </div>
  );
}