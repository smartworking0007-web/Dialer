'use client';

export default function FollowupCalendar() {
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const dates = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm sticky top-8">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-black text-brand-primary uppercase text-sm tracking-widest">March 2026</h3>
        <div className="flex gap-1">
          <button className="p-1 hover:bg-slate-100 rounded">{'<'}</button>
          <button className="p-1 hover:bg-slate-100 rounded">{'>'}</button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-4">
        {days.map(d => (
          <div key={d} className="text-center text-[10px] font-black text-slate-300 uppercase">{d}</div>
        ))}
        {dates.map(d => (
          <div 
            key={d} 
            className={`aspect-square flex items-center justify-center text-[11px] font-bold rounded-xl cursor-pointer transition-all
              ${d === 17 ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/30 scale-110' : 'hover:bg-slate-50 text-slate-600'}
              ${d === 20 || d === 25 ? 'border border-brand-warning' : ''}
            `}
          >
            {d}
          </div>
        ))}
      </div>

      <div className="pt-6 border-t border-slate-50 space-y-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-brand-primary" />
          <p className="text-[9px] font-black text-slate-400 uppercase">Today s Focus</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-brand-warning" />
          <p className="text-[9px] font-black text-slate-400 uppercase">Pending Review</p>
        </div>
      </div>
    </div>
  );
}