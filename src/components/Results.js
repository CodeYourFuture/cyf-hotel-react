import React from "react";
var moment = require("moment");
const Results = prop => {
  return (
    <table className="results">
      <thead>
        <tr>
          <th>Title </th>
          <th>First name </th>
          <th>Surname </th>
          <th>Email</th>
          <th>Room ID </th>
          <th>Check in date </th>
          <th>Check out date </th>
          <th>Days booked </th>
        </tr>
      </thead>
      {prop.results.map(result => (
        <tbody>
          <tr>
            <td>{result.title} </td>
            <td>{result.firstName} </td>
            <td>{result.surname} </td>
            <td>{result.email} </td>
            <td>{result.roomId} </td>
            <td>{result.checkInDate} </td>
            <td>{result.checkOutDate} </td>
            <td>
              {moment(result.checkOutDate).diff(
                moment(result.checkInDate),
                "days"
              )}
            </td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};
export default Results;
