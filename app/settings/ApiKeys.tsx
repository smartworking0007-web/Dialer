'use client';
import React, { useState } from 'react';
// Fixed: Added missing imports
import { Key, Eye, EyeOff, Copy, RefreshCw, Check } from 'lucide-react';

export default function ApiKeys() {
  const [showKey, setShowKey] = useState(false);
  const [copied, setCopied] = useState(false);
  const apiKey = "mk_live_51P2kS8L0Z9xVwQ";

  const handleCopy = () => {
    navigator.clipboard.writeText(apiKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 lg:p-8 shadow-sm transition-all hover:border-brand-primary/20">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-sm font-black text-brand-primary uppercase tracking-widest flex items-center gap-2">
          <Key size={18} className="text-brand-warning" /> API CREDENTIALS
        </h2>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
            Public API Key
          </label>
          
          {/* Responsive Flex Container */}
          <div className="flex flex-col sm:flex-row gap-2">
            <input 
              type={showKey ? "text" : "password"} 
              readOnly 
              value={apiKey} 
              className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-xs font-mono font-bold outline-none focus:ring-2 focus:ring-brand-primary transition-all truncate" 
            />
            
            <div className="flex gap-2 shrink-0">
              {/* Copy Button */}
              <button 
                onClick={handleCopy}
                className="flex-1 sm:flex-none p-3 bg-slate-100 rounded-xl text-slate-500 hover:text-brand-primary hover:bg-white border border-transparent hover:border-slate-200 transition-all flex justify-center items-center"
              >
                {copied ? <Check size={16} className="text-brand-success" /> : <Copy size={16} />}
              </button>
              
              {/* Show/Hide Button */}
              <button 
                onClick={() => setShowKey(!showKey)}
                className="flex-1 sm:flex-none p-3 bg-slate-100 rounded-xl text-slate-500 hover:text-brand-primary hover:bg-white border border-transparent hover:border-slate-200 transition-all flex justify-center items-center"
              >
                {showKey ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>
        </div>

        {/* Warning Note */}
        <div className="p-4 bg-brand-primary/5 border border-brand-primary/10 rounded-2xl flex items-start gap-3">
          <RefreshCw size={16} className="text-brand-primary mt-1 shrink-0" />
          <p className="text-[10px] font-bold text-brand-primary uppercase leading-relaxed tracking-tight">
            Rolling your API keys will invalidate all current integrations. Proceed with caution.
          </p>
        </div>
      </div>
    </div>
  );
}