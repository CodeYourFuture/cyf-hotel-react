import React from "react";
import SearchResultsTableRows from "./SearchResultsTableRows";

const SearchResults = props => {
  return (
    <div>
      <table class="table table-sm">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check-In</th>
            <th scope="col">Check-Out</th>
            <th scope="col">Number of nights</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map(booking => (
            <SearchResultsTableRows booking={booking} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
