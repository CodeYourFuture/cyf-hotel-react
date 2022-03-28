import moment from "moment";
import React, { useState } from "react";

const TableBody = props => {
  const person = props.data;
  const [rowColor, setRowColor] = useState(false);
  function highlightRow() {
    setRowColor(!rowColor);
  }
  const checkIn = moment(person.checkInDate);
  const checkOut = moment(person.checkOutDate);
  return (
    <tr
      key={person.id}
      className={rowColor ? "highlighted" : null}
      onClick={highlightRow}
    >
      <th scope="row">{person.id}</th>
      <td>{person.title}</td>
      <td>{person.firstName}</td>
      <td>{person.surname}</td>
      <td>{person.email}</td>
      <td>{person.roomId}</td>
      <td>{person.checkInDate}</td>
      <td>{person.checkOutDate}</td>
      <td>{checkOut.diff(checkIn, "days")}</td>
    </tr>
  );
};

export default TableBody;
