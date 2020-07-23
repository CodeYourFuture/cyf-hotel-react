import React, { useState } from "react";
import moment from "moment";

function TableRow(props) {
  const [isClicked, setIsClicked] = useState(true);
  return (
    <tr
      onClick={() => setIsClicked(!isClicked)}
      style={!isClicked ? { backgroundColor: "yellow" } : null}
    >
      <th scope="row" />
      <td>{props.data.id}</td>
      <td>{props.data.title}</td>
      <td>{props.data.firstName}</td>
      <td>{props.data.surname}</td>
      <td>{props.data.email}</td>
      <td>{props.data.roomId}</td>
      <td>{props.data.checkInDate}</td>
      <td>{props.data.checkOutDate}</td>
      <td>
        {moment(props.data.checkOutDate).diff(props.data.checkInDate, "days")}
      </td>
    </tr>
  );
}
export default TableRow;
