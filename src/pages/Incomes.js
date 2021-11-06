import { WhiteButton } from "../components/UI/Button";
import { Link } from "react-router-dom";
import Card from "../components/UI/Card";
import { ActiveTab, InactiveTab } from "../components/UI/Tab";
import Title from "../components/UI/Title";
import { useContext } from "react";
import { SessionContext } from "../contexts/SessionContext";
import { SessionFetcher } from "../services/session_fetcher";
function Incomes() {
  const context = useContext(SessionContext);

  function logout() {
    SessionFetcher.logout(context.token);
    context.setToken("");
  }
  return (
    <div>
      <Title title="Expensable" />
      <Link to="/expenses">
        <InactiveTab title="Expenses" />
      </Link>
      <Link to="/incomes">
        <ActiveTab title="Incomes" />
      </Link>

      {context.incomes &&
        context.incomes.map((e) => (
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

export default Incomes;
