import React from "react";
import moment from "moment";

const SearchResults = props => {
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

  return (
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
          return (
            <tr key={index}>
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
                  moment(booking.checkInDate),
                  "days"
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
