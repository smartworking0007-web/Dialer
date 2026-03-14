import {
  Mic,
  Pause,
  PhoneForwarded,
  PhoneOff,
  UserPlus,
  Clock,
} from "lucide-react";

export default function CallConsole() {
  return (
    <div className="bg-white rounded-2rem shadow-xl border border-slate-200 overflow-hidden w-full max-w-5xl h-125 mx-auto flex flex-col shrink-0">
      <div className="bg-slate-50 px-5 py-2 border-b flex justify-between items-center shrink-0">
        <div className="flex items-center gap-2 text-[10px] font-bold text-brand-primary">
          <span className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-pulse"></span>
          CALL IN PROGRESS
        </div>
        <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400">
          <Clock size={12} /> 01:24
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-black text-slate-800 mb-4">
          +91 98765 43210
        </h2>
        <div className="bg-slate-50 p-4 rounded-2xl mb-4 border border-slate-100">
          <p className="text-[9px] font-bold text-slate-400 uppercase mb-1">
            Lead Info
          </p>
          <p className="text-xs font-bold text-slate-700">
            Location: Delhi • Lead Score:{" "}
            <span className="text-brand-success">8/10</span>
          </p>
        </div>
        <textarea
          className="w-full bg-slate-50/50 border border-slate-100 rounded-2xl p-4 text-xs mb-4 h-20 outline-none focus:ring-2 focus:ring-brand-primary/10"
          placeholder="Call notes..."
        />
        <div className="grid grid-cols-4 gap-3 mb-4">
          <button className="bg-slate-100 p-3 rounded-2xl flex flex-col items-center gap-1 text-slate-500">
            <Mic size={18} />
            <span className="text-[8px] font-bold">MUTE</span>
          </button>
          <button className="bg-amber-50 p-3 rounded-2xl flex flex-col items-center gap-1 text-brand-warning border border-amber-100">
            <Pause size={18} />
            <span className="text-[8px] font-bold">HOLD</span>
          </button>
          <button className="bg-brand-primary p-3 rounded-2xl flex flex-col items-center gap-1 text-white">
            <PhoneForwarded size={18} />
            <span className="text-[8px] font-bold">XFER</span>
          </button>
          <button className="bg-brand-danger p-3 rounded-2xl flex flex-col items-center gap-1 text-white">
            <PhoneOff size={18} />
            <span className="text-[8px] font-bold">END</span>
          </button>
        </div>
        <button className="w-full bg-slate-50 py-3 rounded-2xl text-[10px] font-bold text-slate-400 border border-slate-100 hover:bg-slate-100 flex items-center justify-center gap-2">
          <UserPlus size={14} /> ADD CONFERENCE
        </button>
      </div>
    </div>
  );
}
