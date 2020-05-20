import React from "react";
import FakeBookings from "./data/fakeBookings.json";

const SearchResults = ({ results }) => {
  const cont = 0;
  return FakeBookings.map((booking, index) => {
    if (booking.surname === results) {
      cont = 1;
      return (
        <div>
          <table key={index} id={booking.id}>
            <thead>
              <tr>
                <th> Title </th>
                <th> First Name </th>
                <th> SureName </th>
                <th> Email </th>
                <th> Room Number </th>
                <th> CheckInDate </th>
                <th> CheckOutDate </th>
                <th> Nights </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{booking.title}</td>
                <td>{booking.firstName}</td>
                <td>{booking.surname}</td>
                <td>{booking.email}</td>
                <td>{booking.roomId}</td>
                <td>{booking.checkInDate}</td>
                <td>{booking.checkOutDate}</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
  });
  if (cont == 0) {
    return <p> WE have NOT any this coustomer Name //</p>;
  }
};

export default SearchResults;
