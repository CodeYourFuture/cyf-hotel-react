import React from "react";

const SearchResults = props => {
  return (
    <table className="table">
      <thead>
        <tr>
          {props.tableHeaders.map(header => (
            <th scope="col">{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.results.map(result => {
          const moment = require("moment");
          const checkIn = moment(result.checkInDate);
          const checkOut = moment(result.checkOutDate);
          const numberOfNights = checkOut.diff(checkIn, "days");
          return (
            <tr>
              <th scope="row">{result.id}</th>
              <td>{result.title}</td>
              <td>{result.firstName}</td>
              <td>{result.surname}</td>
              <td>{result.email}</td>
              <td>{result.roomId}</td>
              <td>{result.checkInDate}</td>
              <td>{result.checkOutDate}</td>
              <td>{numberOfNights}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
