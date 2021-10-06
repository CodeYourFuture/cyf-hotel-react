import React from "react";
import fakeBookings from "./data/fakeBookings.json";

const SearchResults = props => {
  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">email</th>
            <th scope="col">Room Id</th>
            <th scope="col">Check in</th>
            <th scope="col">Check out</th>
          </tr>
        </thead>
        <tbody className="table-striped">
          {props.results.map(result => {
            return (
              <tr>
                <td>{result.id}</td>
                <td>{result.title}</td>
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
    </div>
  );
};

export default SearchResults;
