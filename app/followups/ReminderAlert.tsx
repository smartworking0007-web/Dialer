'use client';
import { useState } from 'react';
import { Bell, X, Phone, Clock } from 'lucide-react';

export default function ReminderAlert() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:bottom-24 z-50 animate-in slide-in-from-right-10 duration-500">
      <div className="bg-brand-primary text-white p-4 lg:p-6 rounded-3xl shadow-2xl border border-white/10 max-w-sm ml-auto">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-brand-warning rounded-xl text-brand-primary animate-bounce">
              <Bell size={18} fill="currentColor" />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-white/60 leading-none">Callback Due Now</p>
              <h4 className="text-sm font-black uppercase mt-1 tracking-tight text-brand-warning">Sandeep Patidar</h4>
            </div>
          </div>
          <button onClick={() => setIsVisible(false)} className="text-white/40 hover:text-white transition-colors">
            <X size={18} />
          </button>
        </div>

        <div className="flex items-center gap-4 mb-5 px-1">
          <div className="flex items-center gap-2">
            <Clock size={14} className="text-brand-warning" />
            <span className="text-xs font-bold uppercase tracking-tighter">Scheduled: 10:30 AM</span>
          </div>
        </div>

        <div className="flex gap-2">
          <button className="flex-1 bg-brand-success text-white py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-lg shadow-brand-success/20">
            <Phone size={14} fill="currentColor" /> Call Now
          </button>
          <button className="px-4 bg-white/10 text-white py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white/20 transition-all">
            Snooze
          </button>
        </div>
      </div>
    </div>
  );
}