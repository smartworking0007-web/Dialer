'use client';
import { BookOpen, Search, ChevronRight } from 'lucide-react'; // Added ChevronRight

const topics = [
  'Interest Rates 2026',
  'KYC Documentation',
  'Withdrawal Policy',
  'Loan Eligibility',
];

export default function KnowledgeBase() {
  return (
    <div className="bg-brand-primary rounded-3xl p-6 text-white shadow-xl h-full flex flex-col">
      <div className="flex items-center gap-2 mb-6">
        <BookOpen size={18} className="text-brand-warning" />
        <h3 className="text-xs font-black uppercase tracking-widest text-white/80">Knowledge Base</h3>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" size={14} />
        <input 
          type="text" 
          placeholder="SEARCH TOPICS..." 
          className="w-full bg-white/10 border-none rounded-xl py-2 pl-9 text-[10px] font-bold outline-none placeholder:text-white/20 focus:ring-1 focus:ring-brand-warning transition-all"
        />
      </div>

      <div className="space-y-2 overflow-y-auto no-scrollbar">
        {topics.map((item) => (
          <div key={item} className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 cursor-pointer transition-all">
            <span className="text-[10px] font-black uppercase tracking-tight">{item}</span>
            <ChevronRight size={12} className="text-brand-warning" />
          </div>
        ))}
      </div>

      <div className="mt-auto pt-6">
        <button className="w-full py-3 bg-brand-warning text-brand-primary rounded-xl text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-transform">
          Open Full Wiki
        </button>
      </div>
    </div>
  );
}