import React from "react";
import moment from "moment";
import SearchRow from "./SearchRow";
const SearchResults = ({ searchReslt }) => (
  <table className="table table-hover">
    <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">title</th>
        <th scope="col">First Name</th>
        <th scope="col">Surname</th>
        <th scope="col">email</th>
        <th scope="col">Room id</th>
        <th scope="col">Check in date</th>
        <th scope="col">Check out date</th>
        <th scope="col">Nights</th>
      </tr>
    </thead>
    <tbody>
      {searchReslt.map(booking => (
        <SearchRow bookingRow={booking} />
      ))}
    </tbody>
  </table>
);

export default SearchResults;
