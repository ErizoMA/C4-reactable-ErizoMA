import styled from "@emotion/styled";

const Input = styled.input`
  border: 1px solid var(--blue-1);
  width: 260px;
  height: 40px;
  border-radius: 8px;
  background: white;
  padding: 8px 16px;
  ::placeholder {
    font-size: 16px;
    line-height: 24px;
    color: var(--gray-4);
  }
`;

export default Input;
