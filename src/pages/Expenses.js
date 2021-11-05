import { WhiteButton } from "../components/UI/Button";
import Card from "../components/UI/Card";
import { ActiveTab, InactiveTab } from "../components/UI/Tab";
import Title from "../components/UI/Title";

function Expenses() {
  return (
    <div>
      <Title title="Expenses" />
      <ActiveTab title="Expenses" />
      <InactiveTab title="Incomes" />
      <Card category="Food" count="4" total="400.00" />
      <WhiteButton>Log out</WhiteButton>
    </div>
  );
}

export default Expenses;
