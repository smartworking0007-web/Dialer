'use client';
import { useState } from 'react';
import './globals.css';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import CallConsole from '@/components/dialer/CallConsole'; 
import { Menu } from 'lucide-react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <html lang="en">
      {/* overflow-hidden aur h-screen scrollbars ko manage karne ke liye zaroori hai */}
      <body className="bg-brand-bg text-slate-900 font-sans antialiased overflow-hidden h-screen w-full flex">
        
        {/* Mobile Sidebar Overlay - Using z-60 as suggested */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/60 z-60 lg:hidden backdrop-blur-sm" 
            onClick={() => setIsSidebarOpen(false)} 
          />
        )}

        {/* Sidebar Section - Using z-70 and brand-primary */}
        <aside className={`
          fixed inset-y-0 left-0 z-70 transform transition-transform duration-300 ease-in-out
          lg:relative lg:translate-x-0 w-64 bg-brand-primary shrink-0
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <Sidebar onClose={() => setIsSidebarOpen(false)} />
        </aside>

        {/* Main Workspace Area */}
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
          
          {/* Top Navigation Bar */}
          <header className="h-16 lg:h-20 bg-white border-b border-slate-200 flex items-center px-4 lg:px-8 shrink-0 z-50 shadow-sm">
            <button 
              className="lg:hidden p-2 mr-4 text-brand-primary hover:bg-slate-100 rounded-lg" 
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu size={24} />
            </button>
            
            <div className="flex-1">
               <Header />
            </div>
          </header>

          {/* Page Content Area - Using max-w-400 as suggested */}
          <main className="flex-1 overflow-y-auto p-4 lg:p-8 no-scrollbar bg-brand-bg">
            <div className="max-w-400 mx-auto">
              {children}
            </div>
          </main>

          {/* Floating Call Console - Using z-100 */}
          <div className="fixed bottom-6 right-6 z-100">
            <CallConsole />
          </div>
        </div>

      </body>
    </html>
  );
}