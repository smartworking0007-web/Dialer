import CampaignTable from "@/components/CampaignTable";

export default function CampaignsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-black text-brand-sidebar">Active Campaigns</h1>
      <CampaignTable />
    </div>
  );
}