import { useContext } from "react";
import { Link } from "react-router-dom";
import { ExpensableContainer } from "../components/Expensable/ExpensableContainer";
import ExpesableGrid from "../components/Expensable/ExpensableGrid";
import { WhiteButton } from "../components/UI/Button";
import { ActiveTab, InactiveTab } from "../components/UI/Tab";
import Title from "../components/UI/Title";
import { SessionContext } from "../contexts/SessionContext";
import { SessionFetcher } from "../services/session_fetcher";

function Expenses() {
  const context = useContext(SessionContext);

  function logout() {
    SessionFetcher.logout(context.token);
    context.setToken("");
    sessionStorage.setItem("token", "");
  }
  return (
    <ExpensableContainer>
      <Title title="Expensable" />
      <div className="tabs">
        <Link to="/expenses">
          <ActiveTab title="Expenses" />
        </Link>
        <Link to="/incomes">
          <InactiveTab title="Incomes" />
        </Link>
      </div>
      <ExpesableGrid data={context.expenses} />
      <WhiteButton onClick={logout}>Log out</WhiteButton>
    </ExpensableContainer>
  );
}

export default Expenses;
