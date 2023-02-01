import React, { useState } from "react";
// import React from "react";
import moment from "moment";
// import FakeBookings from "./data/fakeBookings.json";
const SearchResults = () => {
  let bookingList = require("./data/fakeBookings.json");
  const [rowISActive, setRowIsActive] = useState(false);

  function handleRowClick(id) {
    if (rowISActive) {
      setRowIsActive(false);
    } else {
      setRowIsActive(id);
    }
    // console.log(`Row ${event.key} is clicked!`)
    // setRowIsActive()
  }
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room ID</th>
            <th scope="col">Check-in date</th>
            <th scope="col">check-out date</th>
            <th scope="col">Number of Nights</th>
          </tr>
        </thead>
        <tbody>
          {bookingList.map((booking, key) => {
            return (
              <tr
                key={key}
                style={{ color: rowISActive === booking.id ? "red" : "" }}
                onClick={() => handleRowClick(booking.id)}
              >
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
                    booking.checkInDate,
                    "days"
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default SearchResults;
