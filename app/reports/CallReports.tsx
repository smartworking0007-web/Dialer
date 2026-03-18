'use client';

const reportData = [
  { id: 'R-902', date: '17 MAR 2026', total: '450', successful: '380', failed: '42', revenue: '$4,200' },
  { id: 'R-901', date: '16 MAR 2026', total: '510', successful: '410', failed: '65', revenue: '$5,150' },
  { id: 'R-900', date: '15 MAR 2026', total: '380', successful: '310', failed: '30', revenue: '$3,800' },
];

export default function CallReports() {
  return (
    <div className="overflow-x-auto no-scrollbar">
      {/* Replaced min-w-[700px] with min-w-175 for v4 optimization */}
      <table className="w-full text-left min-w-175">
        <thead>
          <tr className="border-b border-slate-100 bg-slate-50/30">
            <th className="px-4 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Report ID</th>
            <th className="px-4 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Date</th>
            <th className="px-4 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Dials</th>
            
            {/* Direct color application to avoid CSS conflicts */}
            <th className="px-4 py-4 text-[10px] font-black text-brand-success uppercase tracking-widest">Successful</th>
            <th className="px-4 py-4 text-[10px] font-black text-brand-danger uppercase tracking-widest">Failed</th>
            
            <th className="px-4 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Revenue Generated</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-50 font-bold text-sm">
          {reportData.map((row) => (
            <tr key={row.id} className="hover:bg-slate-50/50 transition-colors">
              <td className="px-4 py-5 text-brand-primary font-black uppercase tracking-tighter">{row.id}</td>
              <td className="px-4 py-5 text-slate-500 uppercase text-xs">{row.date}</td>
              <td className="px-4 py-5 text-slate-800 font-mono tracking-tighter">{row.total}</td>
              <td className="px-4 py-5 text-brand-success font-black">{row.successful}</td>
              <td className="px-4 py-5 text-brand-danger font-black">{row.failed}</td>
              <td className="px-4 py-5 text-right font-black text-brand-primary leading-none">
                <span className="text-[10px] text-slate-300 mr-1">$</span>
                {row.revenue.replace('$', '')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}