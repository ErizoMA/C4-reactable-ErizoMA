import styled from "@emotion/styled";
import Card from "../UI/Card";

function ExpesableGrid({ data }) {
  return (
    <Grid>
      {data &&
        data.map((e) => (
          <Card
            key={e.id}
            id={e.id}
            category={e.name}
            count={e.transactions.length}
            total={e.transactions.reduce(function (acc, obj) {
              return acc + obj.amount;
            }, 0)}
          />
        ))}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px;
`;
export default ExpesableGrid;
