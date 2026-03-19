'use client';
import { ShieldCheck, AlertCircle, Trash2 } from 'lucide-react';
import { useMemo } from 'react';

// Common LeadData Interface (Matches page.tsx)
interface LeadData {
  name: string;
  phone: string;
  city: string;
  source: string;
  [key: string]: string | number | undefined; // Yeh Index Signature hai jo error fix karega
}

interface DuplicateCheckerProps {
  leads: LeadData[];
  onCleanData: (cleaned: LeadData[]) => void;
}

export default function DuplicateChecker({ leads, onCleanData }: DuplicateCheckerProps) {
  
  const duplicates = useMemo(() => {
    const phones = leads.map(l => String(l.phone || '').trim());
    return leads.filter((lead, index) => {
      const phone = String(lead.phone || '').trim();
      return phone !== "" && phones.indexOf(phone) !== index;
    });
  }, [leads]);

  const handleRemoveDuplicates = () => {
    const seen = new Set<string>();
    const uniqueLeads = leads.filter(lead => {
      const phone = String(lead.phone || '').trim();
      if (!phone || seen.has(phone)) return false;
      seen.add(phone);
      return true;
    });
    onCleanData(uniqueLeads);
  };

  if (leads.length === 0) return null;

  return (
    <div className={`p-5 rounded-3xl border shadow-sm flex flex-col md:flex-row items-center justify-between gap-4 transition-all ${
      duplicates.length > 0 ? 'bg-orange-50 border-orange-200' : 'bg-white border-slate-200'
    }`}>
      <div className="flex items-center gap-4">
        <div className={`p-3.5 rounded-2xl relative ${
          duplicates.length > 0 ? 'bg-orange-100 text-orange-600' : 'bg-emerald-50 text-brand-success'
        }`}>
          {duplicates.length > 0 ? <AlertCircle size={24} /> : <ShieldCheck size={24} />}
        </div>
        <div>
          <h4 className="text-sm font-black text-brand-primary uppercase tracking-tight">
            {duplicates.length > 0 ? `${duplicates.length} Duplicates Found` : 'System Guard Active'}
          </h4>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
            {duplicates.length > 0 
              ? 'Click the button to keep only unique leads.' 
              : 'Automatic duplicate detection is scanning in background'}
          </p>
        </div>
      </div>
      
      {duplicates.length > 0 && (
        <button 
          onClick={handleRemoveDuplicates}
          className="w-full md:w-auto px-8 py-3 bg-orange-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-orange-700 active:scale-95 transition-all flex items-center justify-center gap-2"
        >
          <Trash2 size={14} /> Remove Duplicates
        </button>
      )}
    </div>
  );
}