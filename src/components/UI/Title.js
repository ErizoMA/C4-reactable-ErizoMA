import styled from "@emotion/styled";

function Title({ title }) {
  return <P>{title}</P>;
}

const P = styled.p`
  color: var(--gray-2);
  font-size: 30px;
  line-height: 40px;
  font-family: Inter;
  text-align: center;
  /* margin:0 58px; */
`;
export default Title;
