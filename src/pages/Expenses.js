import { Link } from "react-router-dom";
import { WhiteButton } from "../components/UI/Button";
import Card from "../components/UI/Card";
import { ActiveTab, InactiveTab } from "../components/UI/Tab";
import Title from "../components/UI/Title";

function Expenses() {
  return (
    <div>
      <Title title="Expensable" />
      <Link to="/expenses">
        <ActiveTab title="Expenses" />
      </Link>
      <Link to="/incomes">
        <InactiveTab title="Incomes" />
      </Link>
      <Card category="Food" count="4" total="400.00" />
      <WhiteButton>Log out</WhiteButton>
    </div>
  );
}

export default Expenses;
