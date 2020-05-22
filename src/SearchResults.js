import React from "react";
import fakeBookings from "./fakeBookings.js";
import Tbody from "./Tbody.js";
console.log(fakeBookings);
const SearchResults = data => {
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
        </tr>
      </thead>
      {/* <Tbody data /> */}
    </table>
  );
};

export default SearchResults(fakeBookings);
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
