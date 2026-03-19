'use client';
import { useRef, useState, ChangeEvent } from 'react';
import * as XLSX from 'xlsx';
import { Upload, FileSpreadsheet, Loader2 } from 'lucide-react';

// 1. LeadData Interface
interface LeadData {
  name: string;
  phone: string;
  city: string;
  source: string;
  [key: string]: string | number | undefined; 
}

// 2. Raw Excel Row Interface (any hatane ke liye)
interface ExcelRow {
  [key: string]: string | number | undefined;
}

interface ExcelImportProps {
  onDataImported: (data: LeadData[]) => void;
}

export default function ExcelImport({ onDataImported }: ExcelImportProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setLoading(true);

    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const bstr = evt.target?.result;
        const wb = XLSX.read(bstr, { type: 'binary' });
        const ws = wb.Sheets[wb.SheetNames[0]];
        
        // Fix: 'any[]' ki jagah 'ExcelRow[]' use kiya hai
        const rawData = XLSX.utils.sheet_to_json(ws) as ExcelRow[];

        const cleaned: LeadData[] = rawData.map(row => ({
          name: `${row['First Name'] || ''} ${row['Last Name'] || ''}`.trim() || 'Unknown User',
          phone: String(row['Phone Number'] || 'N/A'),
          city: String(row['City'] || 'N/A'),
          source: String(row['Lead Source'] || 'Excel')
        }));

        onDataImported(cleaned);
      } catch (error) {
        console.error("Import Error:", error);
      } finally {
        setLoading(false);
      }
    };
    reader.readAsBinaryString(file);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-5 bg-blue-50/50 border border-blue-100 rounded-3xl flex items-center justify-between">
        <div className="flex items-center gap-4">
          <FileSpreadsheet className="text-brand-primary" size={28} />
          <p className="text-xs font-bold text-slate-500 uppercase">Excel Mapping Active</p>
        </div>
      </div>

      <div 
        onClick={() => fileInputRef.current?.click()} 
        className="p-5 bg-white border-2 border-dashed border-slate-200 rounded-3xl flex items-center justify-center gap-3 cursor-pointer hover:border-brand-primary transition-all"
      >
        <input type="file" ref={fileInputRef} onChange={handleFile} className="hidden" accept=".xlsx,.xls,.csv" />
        {loading ? <Loader2 className="animate-spin text-brand-primary" /> : <Upload size={20} className="text-slate-400" />}
        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
          {loading ? 'Processing...' : 'Upload Excel'}
        </span>
      </div>
    </div>
  );
}