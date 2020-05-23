import React from "react";
import fakeBookings from "./fakeBookings.js";
import moment from "moment";
import Tbody from "./Tbody.js";
// console.log(fakeBookings);
let SearchResults = fakeBookings => {
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
      <Tbody />
    </table>
  );
};

export default SearchResults;
/* {data.map((custumerHistory, index)=>
        <li key ={index}>{line}</li>
        <tr>
      <th key ={index}>{id}</th>
      <th>title</th>
      <th>first name</th>
      <th>surname</th>
      <th>email</th>
      <th>room id</th>
      <th>check in date</th>
      <th>check out date</th>
    </tr>
    }

    </table>
} */
