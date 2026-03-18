import LeadFilters from './LeadFilters';
import LeadsTable from './LeadsTable';
import ExcelImport from './ExcelImport';
import DuplicateChecker from './DuplicateChecker';
import BulkActions from './BulkActions';

export default function LeadsPage() {
  return (
    <div className="max-w-400 mx-auto space-y-6 lg:space-y-8 animate-in fade-in duration-500 pb-24">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 px-1">
        <div>
          <h1 className="text-2xl font-black text-brand-primary uppercase tracking-tight leading-none">LEAD REPOSITORY</h1>
          <p className="text-slate-500 text-[10px] font-black tracking-widest uppercase mt-1">Direct access to your customer database</p>
        </div>
        <div className="hidden sm:block">
          <span className="text-[10px] font-black text-brand-success uppercase border-b-2 border-brand-success pb-1 tracking-tighter">
            Total Active Leads: 1,429
          </span>
        </div>
      </div>

      <ExcelImport />
      
      <div className="space-y-6">
        <DuplicateChecker />
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
          <LeadFilters />
          <LeadsTable />
        </div>
      </div>

      <BulkActions selectedCount={3} />
    </div>
  );
}