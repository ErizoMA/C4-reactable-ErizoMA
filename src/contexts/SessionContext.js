import { createContext, useEffect, useState } from "react";

export const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [categories, setCategories] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [incomes, setIncomes] = useState([]);

  useEffect(() => {
    const expense = categories.filter(
      (item) => item.transaction_type === "expense"
    );
    setExpenses(expense);
    const income = categories.filter(
      (item) => item.transaction_type === "income"
    );
    setIncomes(income);
  }, [categories]);

  const value = {
    token,
    setToken,
    categories,
    setCategories,
    expenses,
    incomes,
  };
  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
};
