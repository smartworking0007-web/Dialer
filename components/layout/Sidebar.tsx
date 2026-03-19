'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Users, Zap, Radio, ShieldAlert, X } from 'lucide-react';

const menuItems = [
  { name: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' },
  { name: 'Leads', icon: Users, href: '/leads' },
  { name: 'Campaigns', icon: Zap, href: '/campaigns' },
  { name: 'Live Feed', icon: Radio, href: '/live-feed' },
  { name: 'DNC List', icon: ShieldAlert, href: '/dnc' },
];

export default function Sidebar({ onClose }: { onClose?: () => void }) {
  const pathname = usePathname();

  return (
    <div className="h-full flex flex-col p-6">
      <div className="flex items-center justify-between mb-10">
        <div className="flex flex-col">
          <div className="text-2xl font-black text-white tracking-tighter">
            MONEY <span className="text-[#FFB800]">KING</span>
          </div>
          <div className="h-1 w-10 bg-[#00C288] mt-1 rounded-full"></div>
        </div>
        <button onClick={onClose} className="lg:hidden text-white/50 hover:text-white">
          <X size={24} />
        </button>
      </div>

      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.name} 
              href={item.href}
              className={`
                flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200
                ${isActive ? 'bg-white/10 text-white font-bold border-l-4 border-[#00C288]' : 'text-slate-400 hover:text-white hover:bg-white/5'}
              `}
            >
              <item.icon size={20} />
              <span className="text-sm uppercase tracking-wide">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto pt-6 border-t border-white/10 text-[10px] font-bold text-slate-500 tracking-widest text-center uppercase">
        © 2026 Money King Dialer
      </div>
    </div>
  );
}