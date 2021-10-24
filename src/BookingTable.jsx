import React from "react";
import moment from "moment";

function BookingTable({ result }) {
  return (
    <tr>
      <th scope="row"> {result.id}</th>
      <td>{result.title}</td>
      <td>{result.firstName}</td>
      <td>{result.surname}</td>
      <td>{result.email}</td>
      <td>{result.roomId}</td>
      <td>{result.checkInDate}</td>
      <td>{result.checkOutDate}</td>
      <td>
        {moment(result.checkOutDate).diff(moment(result.checkInDate), "days")}
      </td>
    </tr>
  );
}

export default BookingTable;
