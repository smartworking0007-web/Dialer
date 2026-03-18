'use client';
export default function DialPad({ onNumberClick }: { onNumberClick: (val: string) => void }) {
  const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'];

  return (
    <div className="grid grid-cols-3 gap-y-4 gap-x-6 px-4">
      {keys.map((key) => (
        <button
          key={key}
          onClick={() => onNumberClick(key)}
          className="text-xl font-bold text-slate-400 hover:text-brand-primary hover:scale-110 transition-all active:scale-95"
        >
          {key}
        </button>
      ))}
    </div>
  );
}