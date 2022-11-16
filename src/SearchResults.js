import React from "react";
import "./Heading.css";

const SearchResults = props => {
  return (
    <>
      <div className="">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">First Name</th>
              <th scope="col">Surname</th>
              <th scope="col">Email</th>
              <th scope="col">Room ID</th>
              <th scope="col">Check In Date</th>
              <th scope="col">Check Out Date</th>
            </tr>
          </thead>
          <tbody>
            {props.results.map((result, index) => (
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
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SearchResults;
