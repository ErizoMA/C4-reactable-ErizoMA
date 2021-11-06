import { createContext, useEffect, useState } from "react";
import { CategoriesFetcher } from "../services/categories_fetcher";

export const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [categories, setCategories] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [incomes, setIncomes] = useState([]);

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"));
      const getData = async () => {
        const categories = await CategoriesFetcher.index(
          sessionStorage.getItem("token")
        );
        setCategories(categories);
      };

      getData();
    }

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
