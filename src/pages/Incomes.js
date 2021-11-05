import { WhiteButton } from "../components/UI/Button";
import { Link } from "react-router-dom";

import Card from "../components/UI/Card";
import { ActiveTab, InactiveTab } from "../components/UI/Tab";
import Title from "../components/UI/Title";
function Incomes() {
  return (
    <div>
      <Title title="Expensable" />
      <Link to="/expenses">
        <InactiveTab title="Expenses" />
      </Link>
      <Link to="/incomes">
        <ActiveTab title="Incomes" />
      </Link>
      <Card category="Salary" count="2" total="5000.00" />
      <WhiteButton>Log out</WhiteButton>
    </div>
  );
}

export default Incomes;
