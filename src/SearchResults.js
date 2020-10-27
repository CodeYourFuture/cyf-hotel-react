import React, { useState } from "react";
// import FakeBookings from "./FakeBookings";
import CustomerProfile from "./CustomerProfile.js";

import SearchLine from "./SearchLine";
// import {BootstrapTable, TableHeaderColumn} from
//        'react-bootstrap-table'
// import '../css/Table.css'
// import '../dist/react-bootstrap-table-all.min.css'

const SearchResults = ({ results }) => {
  const [displayProfile, setDisplayProfile] = useState("");
  const profileDisplay = id => {
    setDisplayProfile(id);
  };
  return (
    <>
      <table className="table-responsive">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">First name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">Number of nights</th>
            <th scope="col">Profile</th>
          </tr>
        </thead>
        <tbody>
          {results.map(item => (
            <SearchLine item={item} profileDisplay={profileDisplay} />
          ))}
        </tbody>
      </table>
      <CustomerProfile id={displayProfile} />
    </>
  );
};

export default SearchResults;
