import { Search, Bell, MessageSquare, Menu } from "lucide-react";

export default function Header({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="flex items-center justify-between py-4 mb-4 gap-4 px-6 w-full">
      <div className="flex items-center gap-3 flex-1">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 bg-white rounded-lg border border-slate-200 shadow-sm"
        >
          <Menu size={20} className="text-slate-600" />
        </button>

        <div className="relative w-full max-w-xs hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-white border border-slate-200 rounded-lg py-1.5 pl-9 pr-4 text-xs outline-none focus:border-brand-primary shadow-sm"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Icons - sm:flex use kiya hai xs ki jagah */}
        <div className="hidden sm:flex gap-4 text-slate-500 mr-2">
          <MessageSquare size={18} className="cursor-pointer hover:text-brand-primary transition-colors" />
          <Bell size={18} className="cursor-pointer hover:text-brand-primary transition-colors" />
        </div>
        
        <div className="flex items-center gap-3 border-l pl-4 border-slate-200">
          {/* FIX: hidden xs:block ko hata kar sm:block ya direct block karein */}
          <div className="text-right leading-none hidden sm:block">
            <p className="text-xs font-black text-slate-900 tracking-tight">Rahul Sharma</p>
            <p className="text-[10px] font-bold text-brand-success mt-1 uppercase">
              Online
            </p>
          </div>
          
          <div className="w-10 h-10 rounded-xl bg-brand-primary text-white flex items-center justify-center font-black text-sm shadow-md border border-white/10 shrink-0">
            RS
          </div>
        </div>
      </div>
    </header>
  );
}