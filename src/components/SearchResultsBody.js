import React from "react";
export default function SearchResultsBody({ bookings }) {
  return (
    <tbody>
      {bookings.map(booking => {
        return (
          <tr key={booking.id}>
            <td>{booking.title}</td>
            <td>{booking.firstName}</td>
            <td>{booking.surname}</td>
            <td>{booking.email}</td>
            <td>{booking.roomId}</td>
            <td>{booking.checkInDate}</td>
            <td>{booking.checkOutDate}</td>
          </tr>
        );
      })}
    </tbody>
  );
}
