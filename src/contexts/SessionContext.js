import { createContext, useState } from "react";

const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const value = {};
  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
};
