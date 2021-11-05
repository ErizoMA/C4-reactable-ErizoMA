import { WhiteButton } from "../components/UI/Button";
import Card from "../components/UI/Card";
import { ActiveTab, InactiveTab } from "../components/UI/Tab";
import Title from "../components/UI/Title";
function Incomes() {
  return (
    <div>
      <Title title="Expensable" />
      <InactiveTab title="Expenses" />
      <ActiveTab title="Incomes" />
      <Card category="Salary" count="2" total="5000.00" />
      <WhiteButton>Log out</WhiteButton>
    </div>
  );
}

export default Incomes;
