"use client";

import { useParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const leads = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  phone: `98765432${10 + i}`,
}));

export default function CampaignViewPage() {
  const params = useParams();
  const router = useRouter(); // ✅ FIX ADDED

  return (
    <div className="p-8">
      
      {/* 🔙 Back Button */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-sm text-slate-500 hover:text-brand-primary mb-4"
      >
        <ArrowLeft size={18} />
        Back
      </button>

      <h1 className="text-2xl font-semibold mb-4">
        Campaign Details (ID: {params.id})
      </h1>

      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold mb-4">
          Leads List
        </h2>

        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Phone</th>
            </tr>
          </thead>

          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id} className="border-t">
                <td className="p-3">{lead.name}</td>
                <td className="p-3">{lead.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}