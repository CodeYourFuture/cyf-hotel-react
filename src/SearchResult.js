import React from "react";

import Row from "./Row";

const SearchResults = ({ results }) => {
  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Sur Name</th>
            <th scope="col">Email</th>
            <th scope="col">Room Id</th>
            <th scope="col">Check-in Date</th>
            <th scope="col">Check-out Date</th>
            <th scope="col">No.of Days</th>
          </tr>
        </thead>
        <tbody>
          {results.map(result => {
            return <Row key={result.id} results={result} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
