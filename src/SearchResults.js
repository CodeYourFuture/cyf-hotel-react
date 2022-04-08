import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

const SearchResults = props => {
  //const [id, setId] = useState(null);

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
            {headings.map((heading, index) => {
              return (
                <th scope="col" key={index}>
                  {heading}
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {props.bookings.map((booking, index) => {
            const [selected, setSelected] = useState(false);
            const highlightRow = () => setSelected(!selected);
            return (
              <tr
                key={index}
                onClick={highlightRow}
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
                <td>
                  {/*<button value={booking.id} onClick={showProfile}>
                    View Profile
                  </button>*/}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/*{id ? <CustomerProfile id={id} /> : null}*/}
    </div>
  );
};

export default SearchResults;
