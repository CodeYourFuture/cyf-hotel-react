import React from "react";

import SearchResult from "./SearchResult";

const SearchResults = props => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email address</th>
          <th scope="col">Room #</th>
          <th scope="col">Check-in date</th>
          <th scope="col">Check-out date</th>
          <th scope="col">Nights</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map(el => (
          <SearchResult {...el} key={el.id} />
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
