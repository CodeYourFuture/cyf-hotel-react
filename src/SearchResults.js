import React from "react";
import TableRow from "./TableRow";

const SearchResults = ({ results }) => {
  return (
    <div className="table-container">
      <p className="results">
        Results:<span> </span>
      </p>
      <table class="table table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">First name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check-in date</th>
            <th scope="col">Check-out date</th>
            <th scope="col">Nr. of nights</th>
          </tr>
        </thead>
        <tbody>
          {results.map(data => (
            <TableRow data={data} key={data.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
