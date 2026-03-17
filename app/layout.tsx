"use client";
import { useState } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-brand-bg text-slate-900`}>
        <div className="flex h-svh overflow-hidden">
          <Sidebar isOpen={isSidebarOpen} setIsOpen={setSidebarOpen} />
          <div className="flex-1 flex flex-col min-w-0">
            <Header onMenuClick={() => setSidebarOpen(true)} />
              
            
            <main className="flex-1 p-4 sm:p-8 overflow-y-auto no-scrollbar">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}