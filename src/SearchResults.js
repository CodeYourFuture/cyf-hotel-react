import React from "react";

import CustomerBookings from "./CustomerBookings";
import CustomerProfile from "./CustomerProfile";

const SearchResults = props => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room Id</th>
          <th scope="col">Check in Date</th>
          <th scope="col">Check out Date</th>
          <th scope="col">Duration</th>
          <th scope="col">Button</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map(result => (
          <CustomerBookings result={result} key={result.id} />
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
