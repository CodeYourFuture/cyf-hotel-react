import React from "react";
import moment from "moment";
function SearchResult({ results }) {
  return (
    <table class="table">
      <thead className="thead-warning">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title </th>
          <th scope="col">FirstName </th>
          <th scope="col">Surname</th>
          <th scope="col">Email </th>
          <th scope="col">RoomId </th>
          <th scope="col">Check-in-Date </th>
          <th scope="col">Check-out-Date </th>
          <th scope="col">Number of Nights </th>
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
                {moment(booking.checkInDate).diff(
                  moment(booking.checkOutDate),
                  "days"
                )}
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

export default SearchResult;
