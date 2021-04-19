import React from "react";

function SearchResults({ results }) {
  console.log(results);
  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">email</th>
            <th scope="col">Room Id</th>
            <th scope="col">Check In Date</th>
            <th scope="col">Check Out date</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => {
            return (
              <tr key={index}>
                <th scope="row">{result.id}</th>
                {/* <td>{result.id}</td> */}
                <td>{result.firstName}</td>
                <td>{result.surname}</td>
                <td>{result.email}</td>
                <td>{result.roomId}</td>
                <td>{result.checkInDate}</td>
                <td>{result.checkOutDate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default SearchResults;
