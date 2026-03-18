'use client';
import { FileSpreadsheet, Download, Upload } from 'lucide-react';

export default function ExcelImport() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Template Download */}
      <div className="p-5 bg-blue-50/50 border border-blue-100 rounded-3xl flex items-center justify-between group cursor-pointer hover:bg-blue-50 transition-all">
        <div className="flex items-center gap-4">
          <FileSpreadsheet className="text-brand-primary" size={28} />
          <div>
            <p className="text-[10px] font-black text-brand-primary uppercase tracking-widest">Sample File</p>
            <p className="text-xs font-bold text-slate-500">Download .CSV Template</p>
          </div>
        </div>
        <Download size={20} className="text-brand-primary group-hover:translate-y-1 transition-transform" />
      </div>

      {/* Upload Action */}
      <div className="p-5 bg-white border-2 border-dashed border-slate-200 rounded-3xl flex items-center justify-center gap-3 hover:border-brand-primary hover:bg-slate-50 transition-all cursor-pointer">
        <Upload size={20} className="text-slate-400" />
        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Drop Excel File Here</span>
      </div>
    </div>
  );
}