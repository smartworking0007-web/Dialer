'use client';
import { Bell, UserCircle, Download, PhoneCall } from 'lucide-react';

export default function Header() {
  return (
    <div className="flex items-center justify-between w-full">
      {/* Left: Dashboard Title */}
      <div>
        <h1 className="text-lg lg:text-xl font-bold text-slate-800 tracking-tight">DASHBOARD</h1>
        <p className="hidden sm:block text-[10px] font-bold text-slate-400 tracking-widest uppercase">
          Real-time Performance Metrics
        </p>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-3 lg:gap-6">
        
        {/* ADDED: Start Dialer Button (Fixes 'PhoneCall' unused error) */}
        <button className="hidden sm:flex items-center gap-2 bg-[#00C288] text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-[#00b07b] transition-all shadow-md">
          <PhoneCall size={14} />
          START DIALER
        </button>

        {/* DOWNLOAD REPORT - Updated to bg-brand-primary */}
        <button className="hidden md:flex items-center gap-2 bg-brand-primary text-white px-4 py-2 rounded-lg text-xs font-bold hover:opacity-90 transition-all shadow-md">
          <Download size={14} />
          DOWNLOAD REPORT
        </button>

        {/* Action Icons Group */}
        <div className="flex items-center gap-4 border-l border-slate-200 pl-4 lg:pl-6">
          
          {/* NOTIFICATION - Updated to hover:text-brand-primary */}
          <button className="relative text-slate-400 hover:text-brand-primary p-1 transition-colors">
            <Bell size={22} />
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white" />
          </button>

          {/* USER PROFILE */}
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-500 border border-slate-200 group-hover:border-[#00C288] transition-all shadow-sm overflow-hidden">
              <UserCircle size={24} />
            </div>
            <div className="hidden lg:block text-left">
              <p className="text-xs font-bold text-slate-800 leading-tight">Rahul Sharma</p>
              <p className="text-[10px] font-bold text-green-500">CONNECTED</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}