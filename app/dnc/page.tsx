import DncListTable from './DncListTable';
import BlockNumberForm from './BlockNumberForm';

export default function DncPage() {
  return (
    <div className="max-w-400 mx-auto space-y-6 lg:space-y-8 animate-in fade-in duration-500 pb-10 px-4 lg:px-0">
      {/* Header: Stacks on mobile */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <h1 className="text-xl lg:text-2xl font-black text-brand-primary uppercase tracking-tight">
            DNC REGISTRY
          </h1>
          <p className="text-slate-500 text-[9px] lg:text-[10px] font-black tracking-widest uppercase mt-1">
            Manage restricted numbers and compliance
          </p>
        </div>
        <div className="w-full sm:w-auto text-left sm:text-right border-t sm:border-t-0 pt-2 sm:pt-0">
          <span className="text-[10px] font-black text-brand-danger uppercase border-b-2 border-brand-danger pb-1 tracking-tighter block sm:inline">
            Strict Compliance Mode Active
          </span>
        </div>
      </div>

      {/* Grid: Form on top for mobile, left for desktop */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 lg:gap-8">
        <div className="xl:col-span-1">
          <BlockNumberForm />
        </div>

        <div className="xl:col-span-3">
          <DncListTable />
        </div>
      </div>
    </div>
  );
}