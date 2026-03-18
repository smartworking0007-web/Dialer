import FollowupList from './FollowupList';
import FollowupCalendar from './FollowupCalendar';
import ReminderAlert from './ReminderAlert'; // Import here
import { CalendarClock, BellRing } from 'lucide-react';

export default function FollowupsPage() {
  return (
    // Optimized width for Tailwind v4 scale
    <div className="max-w-400 mx-auto space-y-6 lg:space-y-8 animate-in fade-in duration-500 pb-20 px-4 lg:px-0">
      
      {/* Header: Stacks on mobile */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <h1 className="text-xl lg:text-2xl font-black text-brand-primary uppercase tracking-tight flex items-center gap-3">
            <CalendarClock size={28} className="text-brand-warning" /> SCHEDULED FOLLOW-UPS
          </h1>
          <p className="text-slate-500 text-[9px] lg:text-[10px] font-black tracking-widest uppercase mt-1 leading-relaxed">
            Track and manage your upcoming client callbacks efficiently
          </p>
        </div>
        <button className="w-full sm:w-fit bg-brand-primary text-white px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-all">
          <BellRing size={14} /> View Overdue
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
        {/* Left: Interactive Calendar (Stays on top in Mobile) */}
        <div className="xl:col-span-1">
          <FollowupCalendar />
        </div>

        {/* Right: Detailed List of Callbacks */}
        <div className="xl:col-span-2 space-y-6">
          <div className="flex items-center justify-between border-b-2 border-brand-primary pb-2">
            <h2 className="text-xs lg:text-sm font-black text-brand-primary uppercase tracking-widest italic-none">
              Upcoming Queue
            </h2>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">3 Items Pending</span>
          </div>
          <FollowupList />
        </div>
      </div>

      {/* Floating Alert Component */}
      <ReminderAlert />
    </div>
  );
}