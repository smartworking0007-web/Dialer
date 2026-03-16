import CampaignTable from "../../components/CampaignTable";

export default function CampaignPage() {
  return (
    <div className="p-8 h-screen overflow-y-auto">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-slate-800">
          Campaign Management
        </h1>

        <button className="bg-brand-primary text-white px-5 py-2 rounded-lg hover:opacity-90">
          + Create Campaign
        </button>
      </div>

      <CampaignTable />

    </div>
  );
}