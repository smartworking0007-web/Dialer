"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  PhoneCall,
  BarChart3,
  Settings,
  LogOut,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function Sidebar({
  isOpen, // Mobile drawer ke liye
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}) {
  // Sidebar ko collapse karne ki state
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 bg-brand-sidebar text-white flex flex-col p-6 transition-all duration-300 lg:static ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } ${isCollapsed ? "lg:w-20 lg:px-4" : "lg:w-64"}`}
      >
        {/* --- Toggle Arrow Button (Sirf Desktop par dikhega) --- */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="hidden lg:flex absolute -right-3 top-12 bg-brand-primary text-white rounded-full p-1 border border-brand-sidebar hover:scale-110 transition-transform shadow-xl z-50"
        >
          {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
        </button>
        {/* --- Header Section (Money King Logo) --- */}
        <div className="flex items-center justify-between mb-10 pb-4 border-b-2 border-white/30 overflow-hidden">
          <div className="flex items-center gap-3">
            <PhoneCall size={24} className="animate-bounceshrink-0" />
            {!isCollapsed && (
              <h2 className="text-xl font-black text-white  animate-in fade-in duration-500">
                Money King.
              </h2>
            )}
            
          </div>

          {/* Mobile Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden text-slate-400"
          >
            <X size={20} />
          </button>
        </div>

        {/* --- Navigation --- */}
        <nav className="flex-1 space-y-2">
          {[
            {
              icon: <LayoutDashboard size={20} />,
              name: "Dashboard",
              active: true,
            },
            { icon: <Users size={20} />, name: "Leads" },
            { icon: <PhoneCall size={20} />, name: "Campaigns" },
            { icon: <BarChart3 size={20} />, name: "Reports" },
            { icon: <Settings size={20} />, name: "Settings" },
          ].map((item) => (
            <div
              key={item.name}
              className={`flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-all group ${
                item.active
                  ? "bg-brand-primary text-white shadow-lg shadow-blue-900/20"
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <div className="shrink-0">{item.icon}</div>

              {!isCollapsed && (
                <span className="text-sm font-medium animate-in fade-in slide-in-from-left-2">
                  {item.name}
                </span>
              )}

              {/* Tooltip jab sidebar band ho (Hover karne par naam dikhega) */}
              {isCollapsed && (
                <div className="absolute left-16 bg-brand-primary px-2 py-1 rounded text-[10px] opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">
                  {item.name}
                </div>
              )}
            </div>
          ))}
        </nav>
        {/* --- Logout Section --- */}
        <button className="flex items-center gap-3 p-3 text-brand-danger font-bold text-sm mt-auto hover:bg-red-500/10 rounded-xl transition-all">
          <LogOut size={20} className="shrink-0" />
          {!isCollapsed && <span>Logout</span>}
        </button>
      </aside>
    </>
  );
}
