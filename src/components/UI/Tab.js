import styled from "@emotion/styled";

export function ActiveTab({ title }) {
  return (
    <TabContainer>
      <ActiveP>{title}</ActiveP>
      <ActiveBar />
    </TabContainer>
  );
}

export function InactiveTab({ title }) {
  return (
    <TabContainer>
      <DesactiveP>{title}</DesactiveP>
      <DesactiveBar />
    </TabContainer>
  );
}
const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;
const ActiveP = styled.p`
  font-family: Inter;
  font-size: 18px;
  line-height: 24px;
  color: var(--gray-2);
`;

const ActiveBar = styled.div`
  background: var(--blue-1);
  width: 82px;
  height: 2px;
`;

const DesactiveP = styled(ActiveP)`
  color: var(--gray-4);
`;
const DesactiveBar = styled(ActiveBar)`
  background: var(--gray-4);
`;
