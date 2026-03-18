'use client';
import { useState } from 'react';
import { MessageSquare, X, Send, User } from 'lucide-react';

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Action Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 p-4 bg-brand-primary text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all z-60 border-4 border-white"
      >
        <MessageSquare size={24} fill="currentColor" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-0 right-0 w-full sm:bottom-24 sm:right-6 sm:w-80 h-dvh sm:h-112.5 bg-white sm:rounded-3xl shadow-2xl z-60 flex flex-col border border-slate-200 animate-in slide-in-from-bottom-10">
          
          {/* Header */}
          <div className="bg-brand-primary p-4 text-white flex justify-between items-center sm:rounded-t-3xl">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-brand-warning rounded-xl flex items-center justify-center text-brand-primary">
                <User size={16} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-white/60 leading-none">Support Node</p>
                <p className="text-xs font-black uppercase">Live Assistant</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/10 rounded-lg transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Chat Body */}
          <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-slate-50/50 no-scrollbar">
            <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm max-w-[85%]">
              <p className="text-[11px] font-bold text-slate-700 leading-relaxed">
                Hello Sumit! Money King support node 402 is active. How can I help you?
              </p>
              <p className="text-[8px] font-black text-slate-400 mt-2 uppercase text-right tracking-widest">17:21 PM</p>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-slate-100 pb-8 sm:pb-4">
            <div className="flex gap-2 bg-slate-50 p-2 rounded-2xl border border-slate-100">
              <input 
                type="text" 
                placeholder="TYPE YOUR MESSAGE..." 
                className="flex-1 bg-transparent border-none outline-none px-2 text-[10px] font-black uppercase placeholder:text-slate-300"
              />
              <button className="p-2.5 bg-brand-primary text-white rounded-xl hover:opacity-90 active:scale-90 transition-transform">
                <Send size={14} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}