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
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setSidebarOpen} />

      <main className="flex-1 flex flex-col p-4 sm:p-6 overflow-y-auto lg:overflow-hidden">
        <Header onMenuClick={() => setSidebarOpen(true)} />

        <div className="mb-4">
          <h1 className="text-xl sm:text-2xl font-black text-brand-sidebar tracking-tight leading-none ">
            Call Dashboard
          </h1>
        </div>

        <div className="shrink-0">
          <StatsGrid />
        </div>

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-0">
          {/* Middle: Call Console (Priority 1 on Mobile) */}
          <div className="lg:col-span-6 lg:order-2 flex items-start lg:items-center justify-center">
            <CallConsole />
          </div>
          {/* Left: Queue */}
          <div className="lg:col-span-3 lg:order-1 flex flex-col gap-4">
            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm shrink-0">
              <h3 className="font-bold text-xs text-slate-400 mb-4 uppercase">
                Live Queue
              </h3>
              <div className="flex justify-between">
                <div>
                  <p className="text-lg font-black">1.3k</p>
                  <p className="text-[8px] uppercase font-bold text-slate-400">
                    Calls
                  </p>
                </div>
                <div className="text-brand-warning">
                  <p className="text-lg font-black">4.1k</p>
                  <p className="text-[8px] uppercase font-bold text-slate-400">
                    Holds
                  </p>
                </div>
                <div className="text-brand-success">
                  <p className="text-lg font-black">▲ 62</p>
                  <p className="text-[8px] uppercase font-bold text-slate-400">
                    Cam
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex-1 min-h-[150px] lg:overflow-y-auto no-scrollbar">
              <h3 className="font-bold text-xs text-slate-400 mb-3 uppercase">
                Upcoming
              </h3>
              <div className="space-y-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="flex justify-between text-[10px] font-bold text-slate-700 border-b border-slate-50 pb-1"
                  >
                    <span>Anjali Gupta</span>
                    <span className="text-brand-primary">12h</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: History */}
          <div className="lg:col-span-3 lg:order-3 flex flex-col gap-4 mb-8 lg:mb-0">
            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm shrink-0">
              <h3 className="font-bold text-xs text-slate-400 mb-2 uppercase tracking-tight">
                Campaign
              </h3>
              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mb-3">
                <div className="bg-brand-primary w-[65%] h-full"></div>
              </div>
              <div className="grid grid-cols-3 text-center">
                <div>
                  <p className="text-sm font-black text-brand-primary">3.2k</p>
                  <p className="text-[7px] text-slate-400 font-bold uppercase">
                    Dialed
                  </p>
                </div>
                <div>
                  <p className="text-sm font-black text-brand-warning">1.7k</p>
                  <p className="text-[7px] text-slate-400 font-bold uppercase">
                    Rem
                  </p>
                </div>
                <div>
                  <p className="text-sm font-black text-slate-800">5k</p>
                  <p className="text-[7px] text-slate-400 font-bold uppercase">
                    Tot
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex-1 min-h-45 lg:overflow-y-auto no-scrollbar">
              <h3 className="font-bold text-xs text-slate-400 mb-3 uppercase tracking-widest">
                History
              </h3>
              <div className="space-y-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between text-[10px] font-bold border-b border-slate-50 pb-1"
                  >
                    <span className="text-slate-700 truncate w-16">
                      Call #{i}
                    </span>
                    <span className="text-brand-success">Connected</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
