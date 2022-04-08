import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

const SearchResults = ({ bookings }) => {
  //const [id, setId] = useState(null);
  const [selected, setSelected] = useState(false);

  const headings = [
    "Id",
    "Title",
    "First Name",
    "Surname",
    "Email",
    "room Id",
    "Check-In",
    "Check-Out",
    "Night"
  ];

  //function showProfile(event) {
  //setId(event.target.value);
  // }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            {headings.map((heading, index) => (
              <th scope="col" key={index}>
                {heading}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {bookings.map((booking, index) => (
            <tr
              key={index}
              onClick={() => console.log("clicked")}
              className={selected ? "highlightRow" : ""}
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
                  moment(booking.checkInDate),
                  "days"
                )}
              </td>
              <td />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
