import React from "react";

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
    </tr>
  );
}

export default BookingTable;
