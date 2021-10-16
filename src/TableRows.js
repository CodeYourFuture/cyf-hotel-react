import React, { useState } from "react";
import moment from "moment";

const TableRows = props => {
  const [color, setColor] = useState("");
  function handleClick() {
    if (color === "") {
      setColor("selected");
    } else {
      setColor("");
    }
  }
  return (
    <tr onClick={handleClick} className={color}>
      <th scope="row">{props.guest.id}</th>
      <td>{props.guest.title}</td>
      <td>{props.guest.firstName}</td>
      <td>{props.guest.surname}</td>
      <td>{props.guest.email}</td>
      <td>{props.guest.roomId}</td>
      <td>{props.guest.checkInDate}</td>
      <td>{props.guest.checkOutDate}</td>
      <td>
        {moment(props.guest.checkOutDate).diff(
          moment(props.guest.checkInDate),
          "days"
        )}
      </td>
    </tr>
  );
};

export default TableRows;
