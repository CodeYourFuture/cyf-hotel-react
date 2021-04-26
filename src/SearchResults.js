import React from "react";
import BookingDetails from "./BookingDetails.js";

const SearchResults = props => {
  let results = props.results;

  return (
    <>
      <h1>Hello World</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check In</th>
            <th scope="col">Check Out</th>
            <th scope="col">Duration</th>
          </tr>
        </thead>
        <tbody>
          {results.map(info => (
            <BookingDetails props={info} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default SearchResults;
