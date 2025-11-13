import React, { createContext, useContext, useEffect, useState } from "react";

type LanguageContextType = {
  isTamil: boolean;
  setIsTamil: (v: boolean) => void;
  toggleLanguage: () => void;
};

const STORAGE_KEY = "app:isTamil";

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isTamil, setIsTamil] = useState<boolean>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw == null ? true : raw === "true"; // default Tamil = true (to match existing pages)
    } catch {
      return true;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, String(isTamil));
    } catch {
      // ignore
    }
  }, [isTamil]);

  const toggleLanguage = () => setIsTamil((v) => !v);

  return (
    <LanguageContext.Provider value={{ isTamil, setIsTamil, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
