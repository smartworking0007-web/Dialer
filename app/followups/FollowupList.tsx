'use client';
import { Phone, Clock, UserCheck } from 'lucide-react';

const queue = [
  { id: 1, name: 'Sandeep Patidar', time: '10:30 AM', date: 'TODAY', status: 'Priority' },
  { id: 2, name: 'Megha Kulkarni', time: '01:45 PM', date: 'TODAY', status: 'Standard' },
  { id: 3, name: 'Rajesh Khanna', time: '11:00 AM', date: 'TOMORROW', status: 'Standard' },
];

export default function FollowupList() {
  return (
    <div className="space-y-4">
      {queue.map((item) => (
        <div key={item.id} className="bg-white p-5 rounded-3xl border border-slate-200 flex items-center justify-between hover:border-brand-primary transition-all group">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-primary">
              <UserCheck size={20} />
            </div>
            <div>
              <p className="font-black text-brand-primary uppercase tracking-tight leading-none">{item.name}</p>
              <div className="flex items-center gap-2 mt-2">
                <Clock size={12} className="text-slate-400" />
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.date} • {item.time}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
             <span className={`text-[9px] font-black uppercase px-2 py-1 rounded ${
               item.status === 'Priority' ? 'bg-red-50 text-brand-danger' : 'bg-blue-50 text-brand-primary'
             }`}>
               {item.status}
             </span>
             <button className="p-3 bg-brand-success text-white rounded-xl shadow-lg shadow-brand-success/20 hover:scale-105 transition-transform">
               <Phone size={16} fill="currentColor" />
             </button>
          </div>
        </div>
      ))}
    </div>
  );
}