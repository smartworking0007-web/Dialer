'use client';
import { useState, useEffect } from 'react';
import { Phone, MapPin } from 'lucide-react';
import { useDialer } from '@/context/DialerContext';

interface LeadData {
  name: string;
  phone: string;
  city: string;
  source: string;
}

interface LeadsTableProps {
  leads: LeadData[];
  onSelectionChange: (count: number) => void;
  onCall?: (phone: string) => void; // Fixed: Added missing prop definition
}

export default function LeadsTable({ leads, onSelectionChange, onCall }: LeadsTableProps) {
  const { triggerCall } = useDialer();
  const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set());

  useEffect(() => {
    onSelectionChange(selectedIds.size);
  }, [selectedIds, onSelectionChange]);

  const handleActionCall = (phone: string) => {
    if (onCall) onCall(phone);
    triggerCall(phone);
  };

  return (
    <div className="overflow-x-auto no-scrollbar">
      <table className="w-full text-left border-collapse">
        <thead className="bg-slate-50 border-b border-slate-200">
          <tr>
            <th className="px-4 py-4 w-10 text-center text-slate-400">#</th>
            <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">Lead details</th>
            <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">Contact Number</th>
            <th className="px-6 py-4 text-[10px] font-black text-slate-500 uppercase text-right">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {leads.map((lead, index) => (
            <tr key={index} className="hover:bg-slate-50 transition-colors">
              <td className="px-4 py-4 text-center">
                <input type="checkbox" checked={selectedIds.has(index)} onChange={() => {
                  const newSet = new Set(selectedIds);
                  if (newSet.has(index)) newSet.delete(index); else newSet.add(index);
                  setSelectedIds(newSet);
                }} className="rounded border-slate-300 text-brand-primary cursor-pointer" />
              </td>
              <td className="px-6 py-4">
                <p className="text-sm font-bold text-slate-800 uppercase tracking-tight">{lead.name}</p>
                <div className="flex items-center gap-1 mt-0.5">
                  <MapPin size={10} className="text-slate-400" />
                  <p className="text-[10px] text-slate-400 font-bold uppercase">{lead.city} • {lead.source}</p>
                </div>
              </td>
              <td className="px-6 py-4 text-slate-600 font-mono text-sm tracking-widest">{lead.phone}</td>
              <td className="px-6 py-4 text-right">
                <button 
                  onClick={() => handleActionCall(lead.phone)}
                  className="bg-brand-primary text-white px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 ml-auto hover:opacity-90 shadow-lg active:scale-95 transition-all"
                >
                  <Phone size={12} fill="currentColor" /> CALL
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}