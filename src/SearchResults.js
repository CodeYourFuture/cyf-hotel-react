import React from "react";

function SearchResult({ results }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Id </th>
          <th>Title </th>
          <th>FirstName </th>
          <th>Surname</th>
          <th>Email </th>
          <th>RoomId </th>
          <th>Check-in-Date </th>
          <th>Check-out-Date </th>
          <th>NumberofNight </th>
        </tr>
      </thead>
      <tbody>
        {results &&
          results.map(booking => {
            return (
              <tr>
                <td>{booking.id} </td>
                <td>{booking.title} </td>
                <td>{booking.firstName} </td>
                <td>{booking.surname} </td>
                <td>{booking.email} </td>
                <td>{booking.roomId} </td>
                <td>{booking.checkInDate} </td>
                <td>{booking.checkOutDate} </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

export default SearchResult;
