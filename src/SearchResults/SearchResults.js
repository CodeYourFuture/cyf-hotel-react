import React from "react";
import moment from "moment";

import "./SearchResults.css";

const SearchResults = props => {
  return (
    <table className="table">
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
            <tr key={id}>
              <td>{title}</td>
              <td>{firstName}</td>
              <td>{surname}</td>
              <td>{email}</td>
              <td>{roomId}</td>
              <td>{checkInDate}</td>
              <td>{checkOutDate}</td>
              <td>{moment(checkOutDate).diff(moment(checkInDate), "days")}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
