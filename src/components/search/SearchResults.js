import React from "react";
import moment from "moment";

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
          const checkIn = moment(booking.checkInDate);
          const checkOut = moment(booking.checkOutDate);
          const totalNumberOfNights = checkOut.diff(checkIn, "days");
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
              <td>{(booking[`Number Of Nights`] = totalNumberOfNights)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
