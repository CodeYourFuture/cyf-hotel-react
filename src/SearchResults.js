import React, { useState } from "react";
import moment from "moment";

function SearchResults({ bookingsArray }) {
  const [bg, setBg] = useState("off");

  function colorChangeHandler(id) {
    if (bg === "off") {
      setBg("on");
    } else {
      setBg("off");
    }

    console.log(id);
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room ID</th>
            <th scope="col">Check-In Date</th>
            <th scope="col">Check-Out Date</th>
            <th scope="col">Nights</th>
          </tr>
        </thead>
        {/* split booking into separate component, with 1 state and use state for colour change */}

        <tbody>
          {bookingsArray.map((booking) => {
            return (
              <tr
                className={`${bg}`}
                onClick={() => {
                  colorChangeHandler(booking.id);
                }}
              >
                <td>{booking.id}</td>
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
    </>
  );
}

export default SearchResults;
