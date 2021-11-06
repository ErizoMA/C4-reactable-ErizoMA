import { createContext, useState } from "react";

export const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [categories, setCategories] = useState([]);

  const value = { token, setToken, categories, setCategories };
  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
};
