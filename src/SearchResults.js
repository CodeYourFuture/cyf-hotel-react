import React from "react";
import Nights from "./Nights";
const SearchResults = ({ bookings }) => {
  return bookings.map((booking) => {
    return (
      <tbody key={booking.id}>
        <tr>
          <td>{booking.id}</td>
          <td>{booking.title}</td>
          <td>{booking.firstName}</td>
          <td>{booking.surname}</td>
          <td>{booking.email}</td>
          <td>{booking.roomId}</td>
          <td>{booking.checkInDate}</td>
          <td>{booking.checkOutDate}</td>
          <td>
            {Nights({
              checkInDate: booking.checkInDate,
              checkOutDate: booking.checkOutDate,
            })}
          </td>
        </tr>
      </tbody>
    );
  });
};

export default SearchResults;
