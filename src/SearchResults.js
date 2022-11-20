import React from "react";
import moment from "moment";

const SearchResults = ({ results }) => {
  return (
    <table className="table main">
      <thead>
        <tr>
          <th>title</th>
          <th>firstName</th>
          <th>surname</th>
          <th>email</th>
          <th>roomId</th>
          <th>checkInDate</th>
          <th>checkOutDate</th>
          <th>NightStayed</th>
        </tr>
      </thead>
      <tbody>
        {results.map(record => {
          return (
            <tr>
              <td>{record.title}</td>
              <td>{record.firstName}</td>
              <td>{record.surname}</td>
              <td>{record.email}</td>
              <td>{record.roomId}</td>
              <td>{record.checkInDate}</td>
              <td>{record.checkOutDate}</td>
              <td>{record.NightStayed}</td>
              <td>
                {moment(record.checkOutDate).diff(record.checkInDate, "days")}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
