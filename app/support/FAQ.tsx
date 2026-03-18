'use client';

const faqs = [
  { q: 'How to connect SIP?', a: 'Go to Settings > SIP and enter your domain credentials.' },
  { q: 'What is DNC compliance?', a: 'DNC registry ensures you don’t call restricted numbers.' },
  { q: 'How to export reports?', a: 'Navigate to Reports and click the "Export All" button.' },
];

export default function FAQ() {
  return (
    <div className="space-y-4">
      {faqs.map((f, i) => (
        <div key={i} className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
          <p className="text-[11px] font-black text-brand-primary uppercase mb-2">{f.q}</p>
          <p className="text-[11px] font-medium text-slate-500 leading-relaxed">{f.a}</p>
        </div>
      ))}
      <div className="p-4 bg-brand-primary rounded-2xl text-center">
         <p className="text-[10px] font-black text-white uppercase tracking-widest mb-2">Need more help?</p>
         <button className="text-[9px] font-black text-brand-warning uppercase border-b border-brand-warning">Talk to an expert</button>
      </div>
    </div>
  );
}