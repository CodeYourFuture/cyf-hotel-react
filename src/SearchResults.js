import React from "react";
import Tbody from "./Tbody.js";
// console.log(fakeBookings);
let SearchResults = props => {
  return (
    <table className="table table-borderless">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">title</th>
          <th scope="col">first name</th>
          <th scope="col">surname</th>
          <th scope="col">email</th>
          <th scope="col">room id</th>
          <th scope="col">check in date</th>
          <th scope="col">check out date</th>
          <th scope="col">days stayed</th>
        </tr>
      </thead>
      <Tbody bookings={props.bookings} />
    </table>
  );
};

export default SearchResults;
