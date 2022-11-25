import React from "react";

import SearchRow from "./SearchRow.jsx";

const SearchResults = ({ results }) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">Number of nights</th>
          </tr>
        </thead>
        <tbody>
          {results.map((booking, index) => {
            return <SearchRow key={index} info={booking} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
