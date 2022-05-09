import React, { useContext, useState } from "react";

interface IContextDati {
  rocc: string;
}

export const AppContext = React.createContext<IContextDati | null>(null);

const AppProvider: React.FC<React.ReactNode> = ({ children }) => {
  const rocc = "ciao";

  return <AppContext.Provider value={{ rocc }}>{children}</AppContext.Provider>;
};

export default AppProvider;
