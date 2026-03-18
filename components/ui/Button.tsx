export default function Button({ children, onClick, className = "", variant = "primary" }: any) {
  const base = "px-4 py-2 rounded-lg font-bold transition-all active:scale-95 text-sm";
  const variants: any = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    gold: "bg-yellow-500 text-white hover:bg-yellow-600",
    outline: "border border-slate-200 text-slate-600 hover:bg-slate-50"
  };
  return (
    <button onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}