import CampaignList from './CampaignList';
import CampaignForm from './CampaignForm';
import CampaignSettings from './CampaignSettings';

export default function CampaignsPage() {
  return (
    <div className="max-w-400 mx-auto space-y-8 animate-in fade-in duration-500">
      {/* Responsive Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <h1 className="text-2xl font-black text-brand-primary uppercase tracking-tight">
            CAMPAIGN MANAGER
          </h1>
          <p className="text-slate-500 text-[10px] font-black tracking-widest uppercase mt-1">
            Global Strategy & Project Execution
          </p>
        </div>
        <div className="hidden sm:block">
          <span className="text-[10px] font-black text-brand-success uppercase border-b-2 border-brand-success pb-1 tracking-tighter">
            System Status: All Nodes Active
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
        {/* Left Side: Campaign Controls (Stacks on Mobile) */}
        <div className="xl:col-span-1 space-y-8">
          <CampaignForm />
        </div>

        {/* Right Side: Grid of Content */}
        <div className="xl:col-span-3 space-y-8">
          <div className="space-y-4">
            <h2 className="text-sm font-black text-brand-primary uppercase tracking-widest border-l-4 border-brand-warning pl-4">Active Campaigns</h2>
            <CampaignList />
          </div>
          
          <div className="space-y-4">
            <h2 className="text-sm font-black text-brand-primary uppercase tracking-widest border-l-4 border-brand-warning pl-4">Advanced Settings</h2>
            <CampaignSettings />
          </div>
        </div>
      </div>
    </div>
  );
}