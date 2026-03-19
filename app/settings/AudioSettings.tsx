'use client';
import { Mic, Volume2, Play } from 'lucide-react';

export default function AudioSettings() {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 lg:p-8 shadow-sm">
      <h2 className="text-sm font-black text-brand-primary uppercase tracking-widest mb-6 flex items-center gap-2">
        <Volume2 size={18} className="text-brand-warning" /> Hardware Configuration
      </h2>

      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-slate-50 rounded-2xl text-brand-primary">
              <Mic size={20} />
            </div>
            <div>
              <p className="text-xs font-black text-slate-700 uppercase">Input Device (Microphone)</p>
              <p className="text-[10px] font-bold text-slate-400">Jabra Link 380 • Connected</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
             <div className="w-32 h-2 bg-slate-100 rounded-full overflow-hidden flex">
                <div className="bg-brand-success w-2/3 h-full animate-pulse" />
             </div>
             <span className="text-[10px] font-black text-brand-success">TESTING</span>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
           <p className="text-[10px] font-black text-slate-400 uppercase">Speaker Test</p>
           <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-[10px] font-black text-slate-600 hover:bg-slate-100 transition-all">
             <Play size={12} fill="currentColor" /> Play Test Sound
           </button>
        </div>
      </div>
    </div>
  );
}