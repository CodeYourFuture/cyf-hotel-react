import React from "react";
import SearchTableRow from "./SearchTableRow";

const SearchResults = props => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">First name</th>
          <th scope="col">Surname</th>
          <th scope="col">E-mail</th>
          <th scope="col">Room No</th>
          <th scope="col">Check-in Date</th>
          <th scope="col">Check-out Date</th>
          <th scope="col">Numer of Nights</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map(booking => {
          return <SearchTableRow booking={booking} />;
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
