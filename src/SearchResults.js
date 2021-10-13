import React from "react";
import SearchResultsRow from "./SearchResultsRow";

const SearchResults = props => {
  //let []
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room Id</th>
            <th scope="col">Check-in Date</th>
            <th scope="col">Check-out Date</th>
            <th scope="col">Duration</th>
          </tr>
        </thead>
        <tbody>
          {props.bookings.map(booking => (
            <SearchResultsRow booking={booking} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
