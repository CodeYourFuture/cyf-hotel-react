import moment from "moment";
import React from "react";

const SearchResults = ({ results }) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>title</th>
          <th>Firstname</th>
          <th>Surname</th>
          <th>Email</th>
          <th>Room ID</th>
          <th>Check in</th>
          <th>Check out</th>
          <th>Staying nights</th>
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
