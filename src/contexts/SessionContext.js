import { createContext, useState } from "react";

export const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [token, setToken] = useState("");

  const value = {token,setToken};
  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
};
