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
  {
    id: 1,
    name: "Loan Campaign",
    type: "Outbound",
    leads: 2000,
    calls: 350,
    success: 45,
    status: "Active",
  },
  {
    id: 2,
    name: "Support Campaign",
    type: "Inbound",
    leads: 1500,
    calls: 620,
    success: 52,
    status: "Active",
  },
  {
    id: 3,
    name: "Sales Campaign",
    type: "Outbound",
    leads: 3000,
    calls: 1200,
    success: 65,
    status: "Paused",
  },
  {
    id: 4,
    name: "Survey Campaign",
    type: "Outbound",
    leads: 1800,
    calls: 450,
    success: 30,
    status: "Paused",
  },
  {
    id: 5,
    name: "Renewal Campaign",
    type: "Outbound",
    leads: 2500,
    calls: 1800,
    success: 72,
    status: "Active",
  },
];

export default function CampaignTable() {
  return (
    <div className="bg-white rounded-xl border shadow-sm">

      {/* Table */}
      <table className="w-full text-sm">

        <thead className="bg-gray-100 text-slate-600">
          <tr>
            <th className="p-4 text-left">Campaign Name</th>
            <th className="p-4 text-left">Type</th>
            <th className="p-4 text-left">Total Leads</th>
            <th className="p-4 text-left">Calls Done</th>
            <th className="p-4 text-left">Success Rate</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {campaigns.map((item) => (
            <tr key={item.id} className="border-t">

              <td className="p-4 font-medium text-slate-800">
                {item.name}
              </td>

              <td className="p-4">
                <span className="bg-gray-100 px-3 py-1 rounded-full text-xs">
                  {item.type}
                </span>
              </td>

              <td className="p-4">{item.leads}</td>
              <td className="p-4">{item.calls}</td>

              <td className="p-4">{item.success}%</td>

              <td className="p-4">
                {item.status === "Active" ? (
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs">
                    Active
                  </span>
                ) : (
                  <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs">
                    Paused
                  </span>
                )}
              </td>

              <td className="p-4 flex gap-2">

                <button className="border px-3 py-1 rounded text-blue-600 hover:bg-blue-50">
                  View
                </button>

                <button className="border px-3 py-1 rounded text-yellow-600 hover:bg-yellow-50">
                  Edit
                </button>

                <button className="border px-3 py-1 rounded text-red-600 hover:bg-red-50">
                  Delete
                </button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Footer */}
      <div className="flex items-center justify-between p-4 text-sm text-gray-500 border-t">

        <p>Showing 1 to 5 of 5 entries</p>

        <div className="flex gap-2">
          <button className="border px-3 py-1 rounded">
            Previous
          </button>

          <button className="bg-brand-primary text-white px-3 py-1 rounded">
            1
          </button>

          <button className="border px-3 py-1 rounded">
            Next
          </button>
        </div>

      </div>

    </div>
  );
}