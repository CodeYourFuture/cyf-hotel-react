import React from "react";

import TableCell from "./TableCell";

import "./SearchResults.css";

const SearchResults = props => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>Title</th>
          <th>First Name</th>
          <th>Surname</th>
          <th>Email</th>
          <th>Room id</th>
          <th>Check in date</th>
          <th>Check out date</th>
          <th>Nights</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map(booking => {
          let {
            id,
            title,
            firstName,
            surname,
            email,
            roomId,
            checkInDate,
            checkOutDate
          } = booking;

          return (
            <TableCell
              key={id}
              title={title}
              firstName={firstName}
              surname={surname}
              email={email}
              roomId={roomId}
              checkInDate={checkInDate}
              checkOutDate={checkOutDate}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
