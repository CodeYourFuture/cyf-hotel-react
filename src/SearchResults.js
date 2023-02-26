import React from "react";
import BookingsRow from "./BookingsRow";

const SearchResults = (props) => {
  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">First name</th>
          <th scope="col">Surname</th>
          <th scope="col">EMAIL</th>
          <th scope="col">Room id</th>
          <th scope="col">Check in date</th>
          <th scope="col">Check out date</th>
          <th scope="col">Number of nights</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((guest) => (
          <BookingsRow key={guest.roomId} guest={guest} />
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
