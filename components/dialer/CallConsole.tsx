'use client';
import { useState } from 'react';
import { Phone, X, Maximize2, Mic, Pause, PhoneOff } from 'lucide-react';

export default function CallConsole() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false); // New state to use Pause icon

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="bg-[#00C288] text-white p-4 rounded-full shadow-2xl shadow-[#00C288]/40 hover:scale-110 transition-transform animate-bounce"
      >
        <Phone size={28} />
      </button>
    );
  }

  return (
    <div className="bg-white w-72 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-slate-100 overflow-hidden animate-in fade-in slide-in-from-bottom-10">
      {/* Dialer Header - Updated to bg-brand-primary */}
      <div className="bg-brand-primary p-4 flex items-center justify-between text-white">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest">Ready to Dial</span>
        </div>
        <div className="flex gap-2">
          <Maximize2 size={14} className="cursor-pointer opacity-60" />
          <X size={16} className="cursor-pointer" onClick={() => setIsOpen(false)} />
        </div>
      </div>

      {/* Dial Display */}
      <div className="p-6 text-center">
        <div className="text-2xl font-bold text-slate-300 mb-8 tracking-widest leading-none">
          000-000-0000
        </div>

        {/* Number Pad Grid */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'].map((num) => (
            <button key={num} className="h-12 w-12 mx-auto rounded-full text-lg font-bold text-slate-600 hover:bg-slate-50 active:bg-slate-100 transition-colors">
              {num}
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-around">
          {/* MIC BUTTON */}
          <button className="p-3 text-slate-400 hover:text-brand-primary transition-colors">
            <Mic size={20} />
          </button>

          {/* MAIN CALL BUTTON */}
          <button className="bg-[#00C288] text-white p-4 px-8 rounded-2xl shadow-lg shadow-[#00C288]/30 hover:bg-[#00b07b]">
            <span className="font-bold tracking-widest">CALL</span>
          </button>

          {/* PAUSE/HOLD BUTTON - Fixes 'Pause' unused error */}
          <button 
            onClick={() => setIsPaused(!isPaused)}
            className={`p-3 transition-colors ${isPaused ? 'text-orange-500' : 'text-slate-400 hover:text-brand-primary'}`}
          >
            <Pause size={20} fill={isPaused ? "currentColor" : "none"} />
          </button>
        </div>
        
        {/* HANGUP OPTION (Optional extra) */}
        <button className="mt-4 text-xs font-bold text-red-400 hover:text-red-600 flex items-center justify-center gap-1 mx-auto">
          <PhoneOff size={12} />
          END PREVIOUS SESSION
        </button>
      </div>
    </div>
  );
}