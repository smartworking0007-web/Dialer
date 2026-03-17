import StatsGrid from "@/components/StatsGrid";
import CallConsole from "@/components/CallConsole";

export default function Home() {
  return (
    <>
      <div className="mb-6">
        <h1 className="text-xl sm:text-2xl font-black text-brand-sidebar tracking-tight leading-none">
          Call Dashboard
        </h1>
      </div>
      <div className="shrink-0 mb-6">
        <StatsGrid />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Queue */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
             <h3 className="font-bold text-xs text-slate-400 mb-4 uppercase">Live Queue</h3>
             {/* ... apka existing Queue code ... */}
          </div>
        </div>

        {/* Middle: Call Console */}
        <div className="lg:col-span-6 flex items-start justify-center">
          <CallConsole />
        </div>

        {/* Right: History */}
        <div className="lg:col-span-3 flex flex-col gap-6">
           {/* ... apka existing History/Campaign code ... */}
        </div>
      </div>
    </>
  );
}