import React from "react";

import TableRow from "./tableRow";

function SearchResults(props, index) {
  return (
    <div className="table-div" key={index}>
      <table class="table table-hover">
        <thead className="border">
          <tr className="text-white">
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">email</th>
            <th scope="col">Room ID</th>
            <th scope="col">Check-in Date</th>
            <th scope="col">Check-out Date</th>
            <th scope="col">Number of Nights Stayed</th>
            <th scope="col">Profile</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map(info => {
            return <TableRow e={info} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default SearchResults;
