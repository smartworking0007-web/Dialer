'use client';
import { useState, useEffect, useCallback } from 'react';
import { Phone, X, Mic, MicOff, Delete, PhoneOff, Clock, History, RotateCcw } from 'lucide-react';

interface CallConsoleProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  phoneNumber: string; 
}

export default function CallConsole({ isOpen, setIsOpen, phoneNumber }: CallConsoleProps) {
  const [manualNumber, setManualNumber] = useState("");
  const [isCalling, setIsCalling] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [timer, setTimer] = useState(0);
  const [showHistory, setShowHistory] = useState(false);
  const [callLogs, setCallLogs] = useState<string[]>([]);

  // Keyboard Support
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isOpen || isCalling) return;
    if (/^[0-9*#]$/.test(e.key)) setManualNumber(prev => prev + e.key);
    else if (e.key === 'Backspace') setManualNumber(prev => prev.slice(0, -1));
    else if (e.key === 'Escape') setIsOpen(false);
  }, [isOpen, isCalling, setIsOpen]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Timer & History Logic
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isCalling) {
      interval = setInterval(() => setTimer((prev) => prev + 1), 1000);
      if (manualNumber && !callLogs.includes(manualNumber)) {
        setCallLogs(prev => [manualNumber, ...prev].slice(0, 5));
      }
    } else {
      setTimer(0);
      setIsMuted(false);
    }
    return () => clearInterval(interval);
  }, [isCalling, manualNumber, callLogs]);

  useEffect(() => {
    setManualNumber(phoneNumber);
  }, [phoneNumber]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (!isOpen) return (
    <button onClick={() => setIsOpen(true)} className="fixed bottom-6 right-6 bg-brand-success text-white p-5 rounded-2xl shadow-lg z-50 hover:scale-110 transition-transform">
      <Phone size={24} />
    </button>
  );

  return (
    <>
      <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-50" onClick={() => !isCalling && setIsOpen(false)} />

      <div className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-90 bg-white rounded-[2.5rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.3)] animate-float overflow-hidden transition-all duration-500">
        
        <div className="p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${isCalling ? 'bg-red-500 animate-pulse' : 'bg-brand-success animate-pulse'}`} />
              <button 
                onClick={() => !isCalling && setShowHistory(!showHistory)}
                className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-1 hover:text-brand-primary transition-colors"
              >
                <History size={12} /> {showHistory ? 'Back to Dialer' : 'Call History'}
              </button>
            </div>
            {!isCalling && <X size={20} className="text-slate-400 cursor-pointer" onClick={() => setIsOpen(false)} />}
          </div>

          {showHistory ? (
            /* --- HISTORY UI (Fixed min-h-75) --- */
            <div className="min-h-75 animate-in slide-in-from-right-4 duration-300">
              <h3 className="text-center text-slate-400 text-[10px] font-black uppercase tracking-widest mb-6">Recent Recents</h3>
              <div className="space-y-3">
                {callLogs.length > 0 ? (
                  callLogs.map((log, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 group">
                      <span className="text-lg font-black text-slate-700 tracking-tighter">{log}</span>
                      <button 
                        onClick={() => { setManualNumber(log); setShowHistory(false); }}
                        className="p-2 bg-white text-brand-primary rounded-xl shadow-sm hover:bg-brand-primary hover:text-white transition-all active:scale-90"
                      >
                        <RotateCcw size={16} />
                      </button>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-slate-300 py-20 text-xs font-bold uppercase">No call history found</p>
                )}
              </div>
            </div>
          ) : (
            /* --- STANDARD DIALER UI --- */
            <>
              <div className="text-center mb-10">
                {isCalling && (
                  <div className="flex items-center justify-center gap-2 text-brand-success font-mono font-bold mb-2 animate-pulse">
                    <Clock size={14} /> {formatTime(timer)}
                  </div>
                )}
                <h2 className="text-4xl font-black text-slate-800 tracking-tighter overflow-hidden">
                  {manualNumber || "000 000"}
                </h2>
              </div>

              {!isCalling && (
                 <div className="grid grid-cols-3 gap-y-4 gap-x-4 mb-8">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'].map((n) => (
                      <button key={n} onClick={() => setManualNumber(prev => prev + n)} className="h-16 w-16 mx-auto rounded-full bg-slate-50 text-2xl font-black hover:bg-slate-100 active:scale-90 transition-all border border-slate-100/50">{n}</button>
                    ))}
                 </div>
              )}

              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setIsMuted(!isMuted)}
                  className={`h-16 w-16 rounded-3xl flex items-center justify-center transition-all ${isMuted ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/20' : 'bg-slate-100 text-slate-500'}`}
                >
                  {isMuted ? <MicOff size={24} /> : <Mic size={24} />}
                </button>
                
                {!isCalling ? (
                  <button 
                    onClick={() => setIsCalling(true)}
                    className="flex-1 bg-brand-success text-white h-16 rounded-3xl shadow-[0_12px_24px_-8px_rgba(0,194,136,0.5)] flex items-center justify-center gap-3 active:scale-95 transition-all"
                  >
                    <Phone size={18} fill="currentColor" />
                    <span className="font-black uppercase tracking-widest text-xs">Dial</span>
                  </button>
                ) : (
                  <button 
                    onClick={() => setIsCalling(false)}
                    className="flex-1 bg-red-500 text-white h-16 rounded-3xl shadow-[0_12px_24px_-8px_rgba(239,68,68,0.5)] flex items-center justify-center gap-3 animate-pulse active:scale-95 transition-all"
                  >
                    <PhoneOff size={18} fill="currentColor" />
                    <span className="font-black uppercase tracking-widest text-xs">End</span>
                  </button>
                )}

                {!isCalling && (
                  <button onClick={() => setManualNumber(prev => prev.slice(0, -1))} className="h-16 w-16 rounded-3xl bg-red-50 text-red-500 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all">
                    <Delete size={22} />
                  </button>
                )}
              </div>
            </>
          )}
          
          <p className="text-center mt-6 text-[9px] font-bold text-slate-300 uppercase tracking-widest">
            Money King Premium System v2.0
          </p>
        </div>
      </div>
    </>
  );
}