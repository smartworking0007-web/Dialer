"use client";

type Campaign = {
  id: number;
  name: string;
  type: string;
  leads: number;
  calls: number;
  success: number;
  status: "Active" | "Paused";
};

const campaigns: Campaign[] = [
  { id: 1, name: "Loan Campaign", type: "Outbound", leads: 2000, calls: 350, success: 45, status: "Active" },
  { id: 2, name: "Support Campaign", type: "Inbound", leads: 1500, calls: 620, success: 52, status: "Active" },
  { id: 3, name: "Sales Campaign", type: "Outbound", leads: 3000, calls: 1200, success: 65, status: "Paused" },
  { id: 4, name: "Survey Campaign", type: "Outbound", leads: 1800, calls: 450, success: 30, status: "Paused" },
  { id: 5, name: "Renewal Campaign", type: "Outbound", leads: 2500, calls: 1800, success: 72, status: "Active" },
];

export default function CampaignTable() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Table Wrapper for Horizontal Scroll on Mobile */}
      <div className="overflow-x-auto no-scrollbar">
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-50 text-slate-500 border-b border-slate-200">
            <tr>
              <th className="p-4 font-bold uppercase text-[10px] tracking-wider">Campaign Name</th>
              <th className="p-4 font-bold uppercase text-[10px] tracking-wider">Type</th>
              <th className="p-4 font-bold uppercase text-[10px] tracking-wider">Total Leads</th>
              <th className="p-4 font-bold uppercase text-[10px] tracking-wider">Calls Done</th>
              <th className="p-4 font-bold uppercase text-[10px] tracking-wider">Success Rate</th>
              <th className="p-4 font-bold uppercase text-[10px] tracking-wider">Status</th>
              <th className="p-4 font-bold uppercase text-[10px] tracking-wider">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {campaigns.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                <td className="p-4 font-bold text-slate-800">{item.name}</td>
                <td className="p-4">
                  <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-[11px] font-bold">
                    {item.type}
                  </span>
                </td>
                <td className="p-4 font-medium text-slate-600">{item.leads.toLocaleString()}</td>
                <td className="p-4 font-medium text-slate-600">{item.calls.toLocaleString()}</td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-brand-primary">{item.success}%</span>
                    <div className="w-12 bg-slate-100 h-1.5 rounded-full hidden sm:block">
                      <div 
                        className="bg-brand-primary h-full rounded-full" 
                        style={{ width: `${item.success}%` }}
                      ></div>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  {item.status === "Active" ? (
                    <span className="bg-emerald-50 text-brand-success px-3 py-1 rounded-full text-[11px] font-bold flex items-center gap-1.5 w-fit">
                      <span className="w-1.5 h-1.5 bg-brand-success rounded-full animate-pulse"></span>
                      Active
                    </span>
                  ) : (
                    <span className="bg-amber-50 text-brand-warning px-3 py-1 rounded-full text-[11px] font-bold flex items-center gap-1.5 w-fit">
                      <span className="w-1.5 h-1.5 bg-brand-warning rounded-full"></span>
                      Paused
                    </span>
                  )}
                </td>
                <td className="p-4">
                  <div className="flex gap-2">
                    <button className="p-1.5 border border-slate-200 rounded-lg text-slate-400 hover:text-brand-primary hover:bg-blue-50 transition-all">
                      View
                    </button>
                    <button className="p-1.5 border border-slate-200 rounded-lg text-slate-400 hover:text-brand-warning hover:bg-amber-50 transition-all">
                      Edit
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="flex items-center justify-between p-4 bg-slate-50/50 border-t border-slate-200 text-xs font-bold text-slate-400">
        <p>SHOWING 5 OF 24 CAMPAIGNS</p>
        <div className="flex gap-2">
          <button className="px-3 py-1.5 border border-slate-200 rounded-lg bg-white hover:bg-slate-50">Prev</button>
          <button className="px-3 py-1.5 bg-brand-primary text-white rounded-lg shadow-sm">1</button>
          <button className="px-3 py-1.5 border border-slate-200 rounded-lg bg-white hover:bg-slate-50">Next</button>
        </div>
      </div>
    </div>
  );
}