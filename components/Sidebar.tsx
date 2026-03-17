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

export default function Sidebar({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (val: boolean) => void }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { icon: <LayoutDashboard size={20} />, name: "Dashboard", href: "/" },
    { icon: <Users size={20} />, name: "Leads", href: "/leads" },
    { icon: <PhoneCall size={20} />, name: "Campaigns", href: "/campaigns" },
    { icon: <BarChart3 size={20} />, name: "Reports", href: "/reports" },
    { icon: <Settings size={20} />, name: "Settings", href: "/settings" },
  ];

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm" onClick={() => setIsOpen(false)} />}

      <aside className={`fixed inset-y-0 left-0 z-50 bg-brand-sidebar text-white flex flex-col p-6 transition-all duration-300 lg:static ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"} ${isCollapsed ? "lg:w-20 lg:px-4" : "lg:w-64"}`}>
        <button onClick={() => setIsCollapsed(!isCollapsed)} className="hidden lg:flex absolute -right-3 top-12 bg-brand-primary text-white rounded-full p-1 border border-brand-sidebar hover:scale-110 transition-transform shadow-xl z-50">
          {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
        </button>

        <div className="flex items-center justify-between mb-10 pb-4 border-b-2 border-white/30 overflow-hidden">
          <div className="flex items-center gap-3">
            <PhoneCall size={24} className="shrink-0" />
            {!isCollapsed && <h2 className="text-xl font-black text-white">Money King.</h2>}
          </div>
          <button onClick={() => setIsOpen(false)} className="lg:hidden text-slate-400"><X size={20} /></button>
        </div>

        <nav className="flex-1 space-y-2">
          {menuItems.map((item) => (
            <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)}>
              <div className={`flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-all group mb-2 ${pathname === item.href ? "bg-brand-primary text-white shadow-lg" : "text-slate-400 hover:bg-white/5 hover:text-white"}`}>
                <div className="shrink-0">{item.icon}</div>
                {!isCollapsed && <span className="text-sm font-medium">{item.name}</span>}
              </div>
            </Link>
          ))}
        </nav>

        <button className="flex items-center gap-3 p-3 text-brand-danger font-bold text-sm mt-auto hover:bg-red-500/10 rounded-xl transition-all">
          <LogOut size={20} className="shrink-0" />
          {!isCollapsed && <span>Logout</span>}
        </button>
      </aside>
    </>
  );
}