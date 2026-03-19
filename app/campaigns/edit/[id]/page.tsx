"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";

export default function EditCampaignPage() {
  const params = useParams();
  const router = useRouter(); // ✅ REQUIRED

  const [form, setForm] = useState({
    name: "Loan Campaign",
    type: "Outbound",
    leads: 2000,
  });

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

      <h1 className="text-2xl font-semibold mb-6">
        Edit Campaign (ID: {params.id})
      </h1>

      <div className="bg-white p-6 rounded-xl shadow space-y-4 max-w-xl">

        <input
          type="text"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          className="w-full border p-3 rounded"
        />

        <select
          value={form.type}
          onChange={(e) =>
            setForm({ ...form, type: e.target.value })
          }
          className="w-full border p-3 rounded"
        >
          <option>Outbound</option>
          <option>Inbound</option>
        </select>

        <input
          type="number"
          value={form.leads}
          onChange={(e) =>
            setForm({ ...form, leads: Number(e.target.value) })
          }
          className="w-full border p-3 rounded"
        />

        <button className="bg-brand-primary text-white px-6 py-2 rounded">
          Save Changes
        </button>

      </div>
    </div>
  );
}