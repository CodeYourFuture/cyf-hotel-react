import React, { useState } from "react";
import moment from "moment";
const TableRow = ({ customerList }) => {
  const checkIn = customerList.checkInDate;
  const checkOut = customerList.checkOutDate;
  const duration = moment(checkOut).diff(checkIn, "days");

  const [rowActive, setRowActive] = useState(false);

  const changeRowColor = () => {
    setRowActive(!rowActive);
  };

  return (
    <tr onClick={changeRowColor} className={rowActive ? "row-color" : ""}>
      <th scope="row">{customerList.id}</th>
      <td>{customerList.title}</td>
      <td>{customerList.firstName}</td>
      <td>{customerList.surname}</td>
      <td>{customerList.email}</td>
      <td>{customerList.roomId}</td>
      <td>{checkIn}</td>
      <td>{checkOut}</td>
      <td>{duration} nights</td>
    </tr>
  );
};

export default TableRow;
