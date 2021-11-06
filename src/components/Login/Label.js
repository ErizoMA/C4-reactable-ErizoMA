import styled from "@emotion/styled";
function Label({ text }) {
  return <Text>{text}</Text>;
}
const Text = styled.p`
  font-size: 14px;
  line-height: 24px;
  color: var(--gray-2);
  text-align: left;
`;
export default Label;
