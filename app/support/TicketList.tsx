'use client';

const tickets = [
  { id: 'TK-45', subject: 'SIP Connection Timeout', status: 'In Review', priority: 'High' },
  { id: 'TK-42', subject: 'Lead Export Error', status: 'Resolved', priority: 'Medium' },
  { id: 'TK-39', subject: 'Audio Latency in Mumbai Zone', status: 'Open', priority: 'Critical' },
];

export default function TicketList() {
  return (
    <div className="space-y-4">
      {tickets.map((t) => (
        <div key={t.id} className="bg-white p-5 rounded-3xl border border-slate-200 flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer group">
          <div className="space-y-1">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t.id}</p>
            <h3 className="text-sm font-bold text-brand-primary group-hover:text-blue-600 transition-colors">{t.subject}</h3>
            <div className="flex gap-2">
               <span className={`text-[8px] font-black uppercase px-2 py-0.5 rounded border ${
                 t.priority === 'Critical' ? 'bg-red-50 text-brand-danger border-brand-danger/20' : 'bg-slate-50 text-slate-500 border-slate-200'
               }`}>
                 {t.priority}
               </span>
            </div>
          </div>
          <span className={`text-[10px] font-black uppercase ${t.status === 'Resolved' ? 'text-brand-success' : 'text-brand-warning'}`}>
            {t.status}
          </span>
        </div>
      ))}
    </div>
  );
}