import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState("privacyPolicy");
  const [profileActiveTab, setProfileActiveTab] = useState("profit");

  return (
    <AppContext.Provider
      value={{ activeTab, setActiveTab, profileActiveTab, setProfileActiveTab }}
    >
      {children}
    </AppContext.Provider>
  );
};
