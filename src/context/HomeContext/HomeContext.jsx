import { createContext, useState } from "react";

export const HomeContext = createContext({
  showContact: false,
  setShowContact: () => null,
});

export const HomeContextProvider = ({ children }) => {
  const [showContact, setShowContact] = useState(false);
  const values = { showContact, setShowContact };
  return <HomeContext.Provider value={values}>{children}</HomeContext.Provider>;
};
