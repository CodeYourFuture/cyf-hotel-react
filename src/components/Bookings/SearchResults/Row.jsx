import moment from "moment";
import { useState } from "react";
import styled from "styled-components";

function Row({ person }) {
  const [selected, setSelected] = useState(false);

  const getDifference = (date1, date2) => {
    const start = new moment(date1);
    const end = new moment(date2);
    return end.diff(start, "days");
  };

  const { checkInDate, checkOutDate } = person;

  return (
    <TableRow selected={selected} onClick={() => setSelected((prevSelected) => !prevSelected)}>
      {Object.keys(person).map((props, i) => (
        <td key={i}>{person[props]}</td>
      ))}
      <td>{getDifference(checkInDate, checkOutDate)}</td>
    </TableRow>
  );
}

const TableRow = styled.tr`
  background-color: ${({ selected }) => (selected ? "lightblue" : "")};
`;

export default Row;
