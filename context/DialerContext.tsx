'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

interface DialerContextType {
  triggerCall: (phone: string) => void;
  isDialerOpen: boolean;
  setIsDialerOpen: (open: boolean) => void;
  activeNumber: string;
}

const DialerContext = createContext<DialerContextType | undefined>(undefined);

export function DialerProvider({ children }: { children: ReactNode }) {
  const [activeNumber, setActiveNumber] = useState("");
  const [isDialerOpen, setIsDialerOpen] = useState(false);

  const triggerCall = (phone: string) => {
    setActiveNumber(phone);
    setIsDialerOpen(true);
  };

  return (
    <DialerContext.Provider value={{ triggerCall, isDialerOpen, setIsDialerOpen, activeNumber }}>
      {children}
    </DialerContext.Provider>
  );
}

export const useDialer = () => {
  const context = useContext(DialerContext);
  if (!context) throw new Error("useDialer must be used within a DialerProvider");
  return context;
};