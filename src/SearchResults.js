import React, { useState, useEffect } from "react";

import "moment-timezone";
import CustomerRow from "./CustomerRow";

// creating to global variables that hold the background color
const lightblue = { backgroundColor: "lightblue" };
const lightgreen = { backgroundColor: "lightgreen" };
const rows = document.getElementsByTagName("tr");
const table = document.getElementsByTagName("table");

const SearchResults = props => {
  //setSelect(oldIsSelected => !oldIsSelected)// this will change the value forth and back from now and before

  return (
    <table className="table table-striped">
      <thead className="thead-dark">
        <tr scope="col">
          <th>#</th>
          <th>Title</th>
          <th>First Name</th>
          <th>Surname</th>
          <th>Email</th>
          <th>Room ID</th>
          <th>Check-In Date</th>
          <th>Check-Out Date</th>
          <th>Staying</th>
          <th>Show profile</th>
        </tr>
      </thead>
      <tbody>
        {props.bookings.map(customer => (
          <CustomerRow
            showProfile={props.showProfile}
            // toggleProfile={props.toggleProfile}
            key={customer.id}
            customer={customer}
          />
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
