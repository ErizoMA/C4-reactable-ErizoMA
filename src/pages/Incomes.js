import { WhiteButton } from "../components/UI/Button";
import { Link } from "react-router-dom";
import { ExpensableContainer } from "../components/Expensable/ExpensableContainer";
import { ActiveTab, InactiveTab } from "../components/UI/Tab";
import Title from "../components/UI/Title";
import { useContext } from "react";
import { SessionContext } from "../contexts/SessionContext";
import { SessionFetcher } from "../services/session_fetcher";
import ExpesableGrid from "../components/Expensable/ExpensableGrid";
function Incomes() {
  const context = useContext(SessionContext);

  function logout() {
    SessionFetcher.logout(context.token);
    context.setToken("");
  }
  return (
    <ExpensableContainer>
      <Title title="Expensable" />
      <div className="tabs">
        <Link to="/expenses">
          <InactiveTab title="Expenses" />
        </Link>
        <Link to="/incomes">
          <ActiveTab title="Incomes" />
        </Link>
      </div>

      <ExpesableGrid data={context.incomes} />

      <WhiteButton onClick={logout}>Log out</WhiteButton>
    </ExpensableContainer>
  );
}

export default Incomes;
