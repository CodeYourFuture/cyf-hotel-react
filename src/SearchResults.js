import moment from "moment";
import React, { useState } from "react";

const SearchResults = props => {
  let [highlightRow, setHighlightRow] = useState(false);

  const highlightSelection = () => {
    setHighlightRow(!highlightRow);
  };

  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">email</th>
          <th scope="col">Room ID</th>
          <th scope="col">Check-in Date</th>
          <th scope="col">Check-out Date</th>
          <th scope="col">No. of Nights</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((booking, index) => (
          <tr
            key={index}
            onClick={highlightSelection}
            className={highlightRow ? "highlight-row" : ""}
          >
            <th scope="col">{booking.id}</th>
            <th scope="col">{booking.title}</th>
            <th scope="col">{booking.firstName}</th>
            <th scope="col">{booking.surname}</th>
            <th scope="col">{booking.email}</th>
            <th scope="col">{booking.roomId}</th>
            <th scope="col">{booking.checkInDate}</th>
            <th scope="col">{booking.checkOutDate}</th>
            <th scope="col">
              {moment(booking.checkOutDate).diff(booking.checkInDate, "days")}
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
