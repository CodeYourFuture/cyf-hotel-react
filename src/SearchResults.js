import React from "react";
//import FakeBookings from "./data/fakeBookings.json";

const SearchResults = ({ results }) => {
  const cont = 0;
  results.map((booking, index) => {
    if (results === "x") {
      cont = 1;
      return (
        <div>
          <table key={index} id={booking.id}>
            <tr>
              <th> Title :</th>
              <th> First Name :</th>
              <th> SureName :</th>
              <th> Email :</th>
              <th> Room Number :</th>
              <th> CheckInDate :</th>
              <th> checkOutDate :</th>
            </tr>
            <tr>
              <td>{booking.title}</td>
              <td>{booking.firstName}</td>
              <td>{booking.surname}</td>
              <td>{booking.email}</td>
              <td>{booking.roomId}</td>
              <td>{booking.checkInDate}</td>
              <td>{booking.checkOutDate}</td>
            </tr>
          </table>
        </div>
      );
    }
  });
  if ((cont = 0)) {
    return <p> WE have NOT any this coustomer Name //</p>;
  }
};

export default SearchResults;
