"use client";
import { useState, useRef } from "react";
import { Search, Bell, MessageSquare, ChevronDown, Menu, User, Settings, LogOut, Camera } from "lucide-react";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Profile Image par click karne par file picker open hoga
  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log("Selected file:", file.name);
      // Yahan aap apni upload logic add kar sakte hain
    }
  };

  return (
    <header className="h-16 lg:h-20 w-full bg-white border-b border-slate-200 flex items-center justify-between px-4 lg:px-8 shrink-0 relative">
      
      {/* LEFT SIDE: Mobile Menu & Search */}
      <div className="flex items-center gap-3 flex-1">
        <button 
          onClick={onMenuClick}
          className="lg:hidden p-2 hover:bg-slate-100 rounded-md text-slate-600 transition-colors"
        >
          <Menu size={24} />
        </button>

        <div className="relative w-full max-w-sm hidden lg:block">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            placeholder="Search leads..."
            className="w-full bg-[#F8FAFC] border border-slate-200 rounded-lg py-2 pl-12 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-brand-primary/20 transition-all placeholder:text-slate-400 text-slate-600"
          />
        </div>
      </div>

      {/* RIGHT SIDE: Profile & Optional Icons */}
      <div className="flex items-center gap-4 lg:gap-8">
        
        <div className="hidden md:flex items-center gap-5 text-slate-500">
          <MessageSquare size={22} className="cursor-pointer hover:text-brand-primary transition-colors" />
          <div className="relative cursor-pointer">
            <Bell size={22} className="hover:text-brand-primary transition-colors" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-brand-danger rounded-full border-2 border-white"></span>
          </div>
        </div>

        {/* Profile Group */}
        <div className="flex items-center gap-2 lg:gap-3 relative">
          {/* Clickable Profile Image with Upload Feature */}
          <div 
            className="relative h-9 w-9 lg:h-10 lg:w-10 cursor-pointer group"
            onClick={handleImageClick}
          >
            <div className="w-full h-full rounded-full overflow-hidden border border-slate-200 shadow-sm transition-transform active:scale-95">
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul" 
                alt="Profile" 
                className="bg-slate-100 object-cover w-full h-full"
              />
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Camera size={14} className="text-white" />
              </div>
            </div>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-brand-success border-2 border-white rounded-full"></span>
            
            {/* Hidden Input for File Upload */}
            <input 
              type="file" 
              ref={fileInputRef} 
              className="hidden" 
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>

          {/* Name & Dropdown Button */}
          <div className="flex flex-col">
            <div 
              className="flex items-center gap-1 lg:gap-2 group cursor-pointer select-none"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span className="text-[12px] lg:text-sm font-bold text-slate-800 tracking-tight leading-none max-w-[80px] sm:max-w-none truncate">
                Rahul Sharma
              </span>
              <ChevronDown 
                size={16} 
                className={`text-slate-400 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
              />
            </div>
            
            <div className="hidden sm:flex items-center gap-1 mt-0.5 lg:mt-1">
              <span className="text-[9px] lg:text-[11px] font-bold text-brand-success uppercase tracking-wider">
                Connected
              </span>
              <span className="text-slate-300 text-[10px]">•</span>
              <span className="text-[9px] lg:text-[11px] font-medium text-slate-400">
                2h 45m
              </span>
            </div>
          </div>

          {/* SETTINGS POP-UP (Dropdown Menu) */}
          {isDropdownOpen && (
            <>
              {/* Overlay to close dropdown when clicking outside */}
              <div 
                className="fixed inset-0 z-10" 
                onClick={() => setIsDropdownOpen(false)}
              ></div>
              
              <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-slate-200 rounded-xl shadow-xl py-2 z-20 animate-in fade-in zoom-in duration-200 origin-top-right">
                <div className="px-4 py-2 border-b border-slate-50">
                  <p className="text-xs font-bold text-slate-900">Account</p>
                  <p className="text-[10px] text-slate-500">rahul@example.com</p>
                </div>
                
                <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 transition-colors">
                  <User size={16} />
                  <span>My Profile</span>
                </button>
                
                <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 transition-colors">
                  <Settings size={16} />
                  <span>Settings</span>
                </button>
                
                <div className="border-t border-slate-50 mt-1">
                  <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors">
                    <LogOut size={16} />
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}