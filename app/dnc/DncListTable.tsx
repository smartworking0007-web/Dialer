'use client';
import { Trash2, ShieldCheck, Search } from 'lucide-react';

const dncNumbers = [
  { id: 1, phone: '+91 99001 12233', date: '12 MAR 2026', reason: 'CUSTOMER REQUEST', addedBy: 'Admin' },
  { id: 2, phone: '+91 88770 09988', date: '10 MAR 2026', reason: 'TRAI REGISTRY', addedBy: 'System' },
  { id: 3, phone: '+91 77665 54433', date: '08 MAR 2026', reason: 'LITIGATION', addedBy: 'Legal' },
  { id: 4, phone: '+91 91234 56789', date: '05 MAR 2026', reason: 'DND REQUEST', addedBy: 'Sumit' },
];

export default function DncListTable() {
  return (
    <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
      <div className="p-4 lg:p-6 border-b border-slate-100 bg-slate-50/50 flex flex-col md:flex-row justify-between items-center gap-4">
        <h3 className="text-xs font-black text-brand-primary uppercase tracking-widest">RESTRICTED DATABASE</h3>
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
          <input 
            type="text" 
            placeholder="Search database..." 
            className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-[10px] font-bold outline-none focus:ring-2 focus:ring-brand-danger"
          />
        </div>
      </div>
      
      <div className="overflow-x-auto no-scrollbar">
        {/* min-w-175 (700px) ensures columns don't collapse on mobile */}
        <table className="w-full text-left border-collapse min-w-175">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/20">
              <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Phone Number</th>
              <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Added By</th>
              <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Reason</th>
              <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {dncNumbers.map((item) => (
              <tr key={item.id} className="hover:bg-red-50/30 transition-colors group">
                <td className="px-6 py-5">
                  <div className="flex flex-col gap-0.5">
                    <div className="flex items-center gap-2">
                      <ShieldCheck size={12} className="text-brand-danger" />
                      <p className="font-black text-slate-700 font-mono text-sm tracking-tighter">{item.phone}</p>
                    </div>
                    <p className="text-[9px] font-bold text-slate-400 ml-5">{item.date}</p>
                  </div>
                </td>
                <td className="px-6 py-5">
                   <p className="text-[10px] font-black text-slate-500 uppercase tracking-tight">{item.addedBy}</p>
                </td>
                <td className="px-6 py-5">
                  <span className="text-[10px] font-black uppercase text-brand-primary bg-blue-50 px-2 py-1 rounded-lg">
                    {item.reason}
                  </span>
                </td>
                <td className="px-6 py-5 text-right">
                  <button className="p-2.5 text-slate-300 hover:text-brand-danger transition-all rounded-xl hover:bg-white active:scale-90">
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}