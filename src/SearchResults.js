import React from "react";

import Row from "./Row";

function SearchResults(props) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">Number of Nights</th>
          </tr>
        </thead>
        <tbody>
          {props.booking.map(booking => (
            <Row booking={booking} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SearchResults;
