import styled from "@emotion/styled";

export const BlueButton = styled.button`
  background: var(--blue-1);
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;
  border: none;
  cursor: pointer;
`;

export const WhiteButton = styled(BlueButton)`
  color: var(--blue-1);
  background: white;
  border: 1px solid var(--blue-1);
  :hover {
    background: rgba(47, 128, 237, 0.1);
  }
`;
