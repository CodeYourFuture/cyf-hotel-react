import React from "react";
import moment from "moment";
import "./HighlightRow.css";

const SearchResults = props => {
  const headings = [
    `Id`,
    `Title`,
    `First Name`,
    `Surname`,
    `Email`,
    `Room Id`,
    `Check In Date`,
    `Check Out Date`,
    `Number Of Nights`
  ];

  return (
    <table className="table">
      <thead>
        <tr>
          {headings.map((heading, i) => (
            <th key={i} scope="col">
              {heading}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.bookings.map((booking, i) => {
          return (
            <tr key={i}>
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
