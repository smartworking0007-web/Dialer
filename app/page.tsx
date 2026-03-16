"use client";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import StatsGrid from "@/components/StatsGrid";
import CallConsole from "@/components/CallConsole";

export default function Home() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-svh bg-brand-bg font-sans overflow-hidden">
      {/* 1. Sidebar apni jagah rahega */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setSidebarOpen} />

      {/* 2. Right Side Content Wrapper (No Padding Here) */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* HEADER: Isko main se bahar nikala taaki padding ispe asar na kare */}
        <Header onMenuClick={() => setSidebarOpen(true)} />

        {/* MAIN CONTENT: Padding sirf yahan apply hogi */}
        <main className="flex-1 p-4 sm:p-8 overflow-y-auto no-scrollbar">
          
          <div className="mb-6">
            <h1 className="text-xl sm:text-2xl font-black text-brand-sidebar tracking-tight leading-none">
              Call Dashboard
            </h1>
          </div>

          {/* Stats Section */}
          <div className="shrink-0 mb-6">
            <StatsGrid />
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left: Queue */}
            <div className="lg:col-span-3 flex flex-col gap-6">
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
                <h3 className="font-bold text-xs text-slate-400 mb-4 uppercase">Live Queue</h3>
                <div className="flex justify-between">
                  <div>
                    <p className="text-lg font-black text-slate-800">1.3k</p>
                    <p className="text-[9px] uppercase font-bold text-slate-400">Calls</p>
                  </div>
                  <div className="text-brand-warning">
                    <p className="text-lg font-black">4.1k</p>
                    <p className="text-[9px] uppercase font-bold text-slate-400">Holds</p>
                  </div>
                  <div className="text-brand-success">
                    <p className="text-lg font-black">▲ 62</p>
                    <p className="text-[9px] uppercase font-bold text-slate-400">Cam</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex-1 min-h-[200px]">
                <h3 className="font-bold text-xs text-slate-400 mb-4 uppercase">Upcoming</h3>
                <div className="space-y-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex justify-between text-[11px] font-bold text-slate-700 border-b border-slate-50 pb-2">
                      <span>Anjali Gupta</span>
                      <span className="text-brand-primary">12h</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Middle: Call Console */}
            <div className="lg:col-span-6 flex items-start justify-center">
              <CallConsole />
            </div>

            {/* Right: History & Campaign */}
            <div className="lg:col-span-3 flex flex-col gap-6">
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
                <h3 className="font-bold text-xs text-slate-400 mb-3 uppercase tracking-tight">Campaign</h3>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mb-4">
                  <div className="bg-brand-primary w-[65%] h-full"></div>
                </div>
                <div className="grid grid-cols-3 text-center">
                  <div>
                    <p className="text-sm font-black text-brand-primary">3.2k</p>
                    <p className="text-[8px] text-slate-400 font-bold uppercase">Dialed</p>
                  </div>
                  <div>
                    <p className="text-sm font-black text-brand-warning">1.7k</p>
                    <p className="text-[8px] text-slate-400 font-bold uppercase">Rem</p>
                  </div>
                  <div>
                    <p className="text-sm font-black text-slate-800">5k</p>
                    <p className="text-[8px] text-slate-400 font-bold uppercase">Tot</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex-1 min-h-[200px]">
                <h3 className="font-bold text-xs text-slate-400 mb-4 uppercase">History</h3>
                <div className="space-y-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex items-center justify-between text-[11px] font-bold border-b border-slate-50 pb-2">
                      <span className="text-slate-700">Call #{i}</span>
                      <span className="text-brand-success font-bold">Connected</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}