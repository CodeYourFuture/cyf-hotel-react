import React from "react";

const SearchResults = ({ results }) => {
  console.log(results);
  return (
    <div>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Room Id</th>
            <th>Check In Date</th>
            <th>Check Out Date</th>
          </tr>
        </thead>

        <tbody>
          {results.map(result => {
            let checkInDate = result.checkInDate;
            let checkOutDate = result.checkOutDate;
            return (
              <tr key={result.id}>
                <td>{result.id}</td>
                <td>{result.title}</td>
                <td>{result.firstName}</td>
                <td>{result.surname}</td>
                <td>{result.email}</td>
                <td>{result.roomId}</td>
                <td>{checkInDate}</td>
                <td>{checkOutDate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
