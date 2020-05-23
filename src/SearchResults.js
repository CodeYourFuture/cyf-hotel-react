import React from "react";
import moment from "moment";

function SearchResults(props) {
  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Room</th>
          <th>Check In</th>
          <th>Check out</th>
          <th>Duration</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((result, index) => {
          return (
            <tr key={index}>
              <td>{result.id}</td>
              <td>{result.title}</td>
              <td>{result.firstName}</td>
              <td>{result.surname}</td>
              <td>{result.email}</td>
              <td>{result.roomId}</td>
              <td>{result.checkInDate}</td>
              <td>{result.checkOutDate}</td>
              <td>
                {moment(result.checkOutDate.toString()).diff(
                  moment(result.checkInDate.toString()),
                  "days"
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default SearchResults;
