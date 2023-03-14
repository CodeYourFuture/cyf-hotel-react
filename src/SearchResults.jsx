import React from "react";

function SearchResults(props) {
  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Room ID</th>
          <th scope="col">Check in date</th>
          <th scope="col">Check out date</th>
          <th scope="col">Number of nights</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((row) => {
            return (
                <tr>
                    <td>{row.id}</td>
                    <td>{row.title}</td>
                    <td>{row.firstName}</td>
                    <td>{row.surname}</td>
                    <td>{row.email}</td>
                    <td>{row.roomId}</td>
                    <td>{row.checkInDate}</td>
                    <td>{row.checkOutDate}</td>
                </tr>
            )
        })}
      </tbody>
    </table>
  );
}

export default SearchResults;