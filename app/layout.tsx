'use client';
import { useState } from 'react';
import './globals.css';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import CallConsole from '@/components/dialer/CallConsole'; 
import { Menu } from 'lucide-react';
import { DialerProvider, useDialer } from '@/context/DialerContext';

function LayoutContent({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { isDialerOpen, setIsDialerOpen, activeNumber } = useDialer();

  return (
    <body className="bg-brand-bg text-slate-900 font-sans antialiased overflow-hidden h-screen w-full flex">
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/60 z-60 lg:hidden backdrop-blur-sm" onClick={() => setIsSidebarOpen(false)} />
      )}

      <aside className={`fixed inset-y-0 left-0 z-70 transform transition-transform duration-300 lg:relative lg:translate-x-0 w-64 bg-brand-primary shrink-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <Sidebar onClose={() => setIsSidebarOpen(false)} />
      </aside>

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        <header className="h-16 lg:h-20 bg-white border-b border-slate-200 flex items-center px-4 lg:px-8 shrink-0 z-50 shadow-sm">
          <button className="lg:hidden p-2 mr-4 text-brand-primary" onClick={() => setIsSidebarOpen(true)}>
            <Menu size={24} />
          </button>
          <div className="flex-1">
             <Header /> 
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 lg:p-8 no-scrollbar bg-brand-bg">
          {children}
        </main>

        <div className="fixed bottom-6 right-6 z-100">
          <CallConsole 
            isOpen={isDialerOpen} 
            setIsOpen={setIsDialerOpen} 
            phoneNumber={activeNumber} 
          />
        </div>
      </div>
    </body>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <DialerProvider>
        <LayoutContent>{children}</LayoutContent>
      </DialerProvider>
    </html>
  );
}