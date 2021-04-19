import React from "react";
const TableBody = props => {
  return (
    <tbody>
      {props.bookings.map((booking, index) => (
        <tr key={index}>
          <th scope="row">{booking.id}</th>
          <td>{booking.title}</td>
          <td>{booking.firstName}</td>
          <td>{booking.surname}</td>
          <td>{booking.email}</td>
          <td>{booking.roomId}</td>
          <td>{booking.checkInDate}</td>
          <td>{booking.checkOutDate}</td>
          <td>
            {moment(booking.checkOutDate).diff(
              moment(booking.checkInDate),
              "days"
            )}
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default Table;
