import { 
  Phone, 
  PhoneIncoming, 
  UserCheck, 
  Timer 
} from "lucide-react";

export default function StatsGrid() {
  const stats = [
    { 
      label: "Total Calls", 
      val: "356", 
      color: "text-brand-primary", 
      bg: "bg-blue-50", 
      icon: <Phone size={16} /> 
    },
    { 
      label: "Connected", 
      val: "189", 
      color: "text-brand-success", 
      bg: "bg-emerald-50", 
      icon: <PhoneIncoming size={16} /> 
    },
    { 
      label: "Leads", 
      val: "42", 
      color: "text-brand-warning", 
      bg: "bg-amber-50", 
      icon: <UserCheck size={16} /> 
    },
    { 
      label: "Avg Talk", 
      val: "4:12m", 
      color: "text-brand-secondary", 
      bg: "bg-purple-50", 
      icon: <Timer size={16} /> 
    },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      {stats.map((s) => (
        <div
          key={s.label}
          className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-3"
        >
          {/* Icon and Label Row */}
          <div className="flex items-center justify-between">
            <div className={`${s.bg} ${s.color} p-2 rounded-lg`}>
              {s.icon}
            </div>
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
              {s.label}
            </p>
          </div>

          {/* Value */}
          <h3
            className={`text-xl sm:text-2xl font-black ${s.color} leading-none`}
          >
            {s.val}
          </h3>
        </div>
      ))}
    </div>
  );
}