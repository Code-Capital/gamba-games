import { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState('privacyPolicy');

  return <AppContext.Provider value={{ activeTab, setActiveTab }}>{children}</AppContext.Provider>;
};
