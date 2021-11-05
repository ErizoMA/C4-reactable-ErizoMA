import styled from "@emotion/styled";

function Subtitle({subtitle}) {
  return ( <P>{subtitle}</P> );
}
const P = styled.p`
font-size: 16px;
line-height: 24px;
color:var(--gray-2);
text-align:center;
`
export default Subtitle;