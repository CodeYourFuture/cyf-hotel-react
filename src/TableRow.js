import React from "react";

function TableRow(props) {
  console.log(props.booking.id);
  let customer = props.booking;
  return (
    <tr>
      <th scope="row">{customer.id}</th>
      <td>{customer.title}</td>
      <td>{customer.firstName}</td>
      <td>{customer.surname}</td>
      <td>{customer.email}</td>
      <td>{customer.roomId}</td>
      <td>{customer.checkInDate}</td>
      <td>{customer.checkOutDate}</td>
    </tr>
  );
}

export default TableRow;
