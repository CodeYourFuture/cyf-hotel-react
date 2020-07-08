import React, { useState } from "react";
import moment from "moment";


const TableRow = (props) => {
  const [row, setRow] = useState(false);

  const highlightRow = () => {
    setRow(!row);
  };

  return (
    <tr
      key={props.result.id}
      onClick={highlightRow}
      className={row ? "change" : null}
    >
      <th scope="col">{props.result.title}</th>
      <th scope="col">{props.result.firstName}</th>
      <th scope="col">{props.result.surname}</th>
      <th scope="col">{props.result.email}</th>
      <th scope="col">{props.result.roomId}</th>
      <th scope="col">{props.result.checkInDate}</th>
      <th scope="col">{props.result.checkOutDate}</th>
      <th scope="col">
        {moment(props.result.checkOutDate).diff(
          props.result.checkInDate,
          "days"
        )}
      </th>
    </tr>
  );
};

export default TableRow;
