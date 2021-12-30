import moment from "moment";
import React, { useState } from "react";

function TableRow(props) {
  const [selectedBackGround, setSelectedBackGround] = useState("");
  function handleClick() {
    setSelectedBackGround(() => {
      return "azure";
    });
  }

  return (
    <tr style={{ background: selectedBackGround }} onClick={handleClick}>
      <th scope="row">{props.data.id}</th>
      <td>{props.data.title}</td>
      <td>{props.data.firstName}</td>
      <td>{props.data.surname}</td>
      <td>{props.data.email}</td>
      <td>{props.data.roomId}</td>
      <td>{props.data.checkInDate}</td>
      <td>{props.data.checkOutDate}</td>
      <td>
        {moment(props.data.checkOutDate).diff(
          moment(props.data.checkInDate),
          "days"
        )}
      </td>
    </tr>
  );
}

export default TableRow;
