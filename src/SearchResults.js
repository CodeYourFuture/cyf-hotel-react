import React from "react";
// import FakeBookings from "./data/fakeBookings.json";
import moment from "moment";
import Highlight from "./Highlight";

const SearchResults = props => {
  return (
    <table className="table ">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">TITLE</th>
          <th scope="col">FIRST NAME</th>

          <th scope="col">SURNAME</th>
          <th scope="col">EMAIL</th>
          <th scope="col">ROOM ID</th>

          <th scope="col">CHECK IN DATE</th>
          <th scope="col">CHECK OUT DATE</th>
          <th scope="col"> Numbers of nights</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((customer, index) => {
          return <Highlight customer={customer} />;
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
