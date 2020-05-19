import React from "react";
import moment from "moment";
const TableRow = ({ list }) => {
  const checkIn = list.checkInDate;
  const checkOut = list.checkOutDate;
  const duration = moment(checkOut).diff(checkIn);
  const durationInHours = duration / 1000 / 60 / 60;
  const durationInDays = Math.round(durationInHours / 24);
  return (
    <tr>
      <th scope="row">{list.id}</th>
      <td>{list.title}</td>
      <td>{list.firstName}</td>
      <td>{list.surname}</td>
      <td>{list.email}</td>
      <td>{list.roomId}</td>
      <td>{checkIn}</td>
      <td>{checkOut}</td>
      <td>{durationInDays}</td>
    </tr>
  );
};

export default TableRow;
