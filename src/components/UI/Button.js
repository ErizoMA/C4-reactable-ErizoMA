import styled from "@emotion/styled";

function Button() {
  return <BlueButton>Login</BlueButton>;
}

const BlueButton = styled.button`
  background: var(--blue-1);
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;
  border:none;
  cursor: pointer;
`;

export default Button;
