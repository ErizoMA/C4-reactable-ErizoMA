import { useContext } from "react";
import { Link } from "react-router-dom";
import { WhiteButton } from "../components/UI/Button";
import Card from "../components/UI/Card";
import { ActiveTab, InactiveTab } from "../components/UI/Tab";
import Title from "../components/UI/Title";
import { SessionContext } from "../contexts/SessionContext";
import { SessionFetcher } from "../services/session_fetcher";

function Expenses() {
  const context = useContext(SessionContext);

  function logout() {
    SessionFetcher.logout(context.token);
    context.setToken("");
  }
  return (
    <div>
      <Title title="Expensable" />
      <Link to="/expenses">
        <ActiveTab title="Expenses" />
      </Link>
      <Link to="/incomes">
        <InactiveTab title="Incomes" />
      </Link>
      {context.expenses &&
        context.expenses.map((e) => (
          <Card 
            key={e.id}
            id={e.id}
            category={e.name}
            count={e.transactions.length}
            total={e.transactions.reduce(function (acc, obj) {
              return acc + obj.amount;
            }, 0)}
          />
        ))}
      <WhiteButton onClick={logout}>Log out</WhiteButton>
    </div>
  );
}

export default Expenses;
