'use client';
import { MessageSquareText } from 'lucide-react';

export default function ScriptPanel() {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm h-full flex flex-col">
      <div className="flex items-center gap-2 mb-6 border-b border-slate-100 pb-4">
        <MessageSquareText size={18} className="text-brand-warning" />
        <h3 className="text-xs font-black text-brand-primary uppercase tracking-widest">Active Call Script</h3>
      </div>

      <div className="flex-1 space-y-6 overflow-y-auto no-scrollbar pr-2">
        <div className="space-y-2">
          <span className="text-[9px] font-black text-brand-success uppercase bg-emerald-50 px-2 py-0.5 rounded">Opening</span>
          <p className="text-sm font-bold text-slate-700 leading-relaxed">
            &quot;Hello, am I speaking with [Customer Name]? This is Sumit calling from Money King Financial Services. How are you doing today?&quot;
          </p>
        </div>

        <div className="space-y-2 border-l-4 border-slate-100 pl-4">
          <span className="text-[9px] font-black text-slate-400 uppercase">Pitch</span>
          <p className="text-sm font-bold text-slate-700 leading-relaxed">
            &quot;I&apos;m calling because we&apos;ve recently launched a high-yield savings plan that might be perfect for your portfolio...&quot;
          </p>
        </div>

        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
          <p className="text-[9px] font-black text-brand-danger uppercase mb-2">Rejection Handling</p>
          <p className="text-xs font-medium text-slate-500">
            If customer says &quot;Not interested&quot;, pivot to: I understand. May I just share one key benefit regarding the tax savings?
          </p>
        </div>
      </div>
    </div>
  );
}