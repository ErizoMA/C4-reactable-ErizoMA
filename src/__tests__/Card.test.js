import { render } from "@testing-library/react";
import Card from "../components/UI/Card";

test("Login page renders correctly", () => {
  const container = render(
    <Card id="1" category="Food" count="15" total="1500" />
  );

  const title = container.getByText(/food/i);
  const subtitle = container.getByText(/15 transactions/i);
  const total = container.getByText(/\$ 1500/i);
  expect(title).toHaveTextContent("Food");
  expect(subtitle).toHaveTextContent("15 transactions");
  expect(total).toHaveTextContent("$ 1500");
});
