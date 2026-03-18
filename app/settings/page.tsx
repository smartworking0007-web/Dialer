import ProfileSettings from './ProfileSettings';
import AudioSettings from './AudioSettings';
import SipSettings from './SipSettings';
import ApiKeys from './ApiKeys';

export default function SettingsPage() {
  return (
    <div className="max-w-400 mx-auto space-y-6 lg:space-y-8 animate-in fade-in duration-500 pb-20 px-4 lg:px-0">
      {/* Page Header */}
      <div className="flex flex-col gap-1">
        <h1 className="text-xl lg:text-2xl font-black text-brand-primary uppercase tracking-tight">SYSTEM SETTINGS</h1>
        <p className="text-slate-500 text-[10px] font-black tracking-widest uppercase">Configure identity, hardware and connectivity</p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:gap-8">
        {/* Profile: Full width */}
        <ProfileSettings />
        
        {/* Hardware & SIP: Side-by-side on large screens, stacked on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <AudioSettings />
          <SipSettings />
        </div>

        {/* API Credentials: Full width */}
        <ApiKeys />
      </div>
    </div>
  );
}