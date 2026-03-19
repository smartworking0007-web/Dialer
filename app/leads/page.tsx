'use client';
import { useState } from 'react';
import ExcelImport from './ExcelImport';
import LeadsTable from './LeadsTable';
import DuplicateChecker from './DuplicateChecker';
import LeadFilters from './LeadFilters';
import BulkActions from './BulkActions';


// page.tsx ke top par ye interface check karein
interface LeadData {
  name: string;
  phone: string;
  city: string;
  source: string;
  [key: string]: string | number | undefined; 
}

export default function LeadsPage({ onCall }: { onCall?: (phone: string) => void }) {
  const [leadsData, setLeadsData] = useState<LeadData[]>([]);
  const [selectedCount, setSelectedCount] = useState(0);

  const handleDataImported = (data: LeadData[]) => {
    setLeadsData(data);
  };

  return (
    <div className="max-w-400 mx-auto space-y-6 lg:space-y-8 pb-24">
      <div className="px-1 flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-black text-brand-primary uppercase tracking-tight leading-none">LEAD REPOSITORY</h1>
          <p className="text-slate-500 text-[10px] font-black tracking-widest uppercase mt-1">Direct access to your customer database</p>
        </div>
        <div className="text-[10px] font-black text-brand-success uppercase border-b-2 border-brand-success pb-1 tracking-widest">
          TOTAL: {leadsData.length}
        </div>
      </div>

      <ExcelImport onDataImported={handleDataImported} />
      
      <div className="space-y-6">
        <DuplicateChecker leads={leadsData} onCleanData={setLeadsData} />
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
          <LeadFilters />
          <LeadsTable 
            leads={leadsData} 
            onSelectionChange={(count) => setSelectedCount(count)} 
            onCall={onCall} 
          />
        </div>
      </div>

      <BulkActions 
        selectedCount={selectedCount} 
        onDelete={() => setLeadsData([])} 
        onClearSelection={() => setSelectedCount(0)} 
      />
    </div>
  );
}