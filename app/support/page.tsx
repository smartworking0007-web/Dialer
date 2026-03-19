import TicketList from './TicketList';
import FAQ from './FAQ';
import LiveChat from './LiveChat';
import { LifeBuoy, MessageSquare } from 'lucide-react';

export default function SupportPage() {
  return (
    <div className="max-w-400 mx-auto space-y-6 lg:space-y-8 animate-in fade-in duration-500 pb-24 px-4 lg:px-0">
      
      {/* Responsive Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <h1 className="text-xl lg:text-2xl font-black text-brand-primary uppercase tracking-tight flex items-center gap-3">
            <LifeBuoy size={28} className="text-brand-warning" /> HELP & SUPPORT
          </h1>
          <p className="text-slate-500 text-[10px] font-black tracking-widest uppercase mt-1">
            Get technical assistance and platform guidance
          </p>
        </div>
        <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-primary text-white px-8 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-brand-primary/20 active:scale-95 transition-all">
          <MessageSquare size={16} /> Open New Ticket
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Support Tickets (Takes priority on Mobile) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between border-b-2 border-brand-primary pb-2">
            <h2 className="text-xs lg:text-sm font-black text-brand-primary uppercase tracking-widest">Active Tickets</h2>
            <span className="text-[10px] font-black text-slate-400 uppercase">3 Open</span>
          </div>
          <TicketList />
        </div>

        {/* Right: FAQs & Need Help */}
        <div className="space-y-6">
          <h2 className="text-xs lg:text-sm font-black text-brand-primary uppercase tracking-widest border-b-2 border-brand-primary pb-2 w-fit">Quick FAQ</h2>
          <FAQ />
        </div>
      </div>

      {/* Floating Live Chat UI */}
      <LiveChat />
    </div>
  );
}