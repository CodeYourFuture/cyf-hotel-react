import React, { useState } from "react";
import moment from "moment";

function TableRow(props) {
  const [isHighlighted, setIsHighlighted] = useState(false);

  function handleClick() {
    setIsHighlighted(!isHighlighted);
  }

  return (
    <tr
      onClick={handleClick}
      style={{ backgroundColor: isHighlighted ? "yellow" : "" }}
    >
      <th scope="row">{props.result.id}</th>
      <td>{props.result.title}</td>
      <td>{props.result.firstName}</td>
      <td>{props.result.surname}</td>
      <td>{props.result.email}</td>
      <td>{props.result.roomId}</td>
      <td>{props.result.checkInDate}</td>
      <td>{props.result.checkOutDate}</td>
      <td>
        {moment(props.result.checkOutDate).diff(
          moment(props.result.checkInDate),
          "days"
        )}
      </td>
    </tr>
  );
}

export default TableRow;
