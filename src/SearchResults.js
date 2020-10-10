import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";
import RowColorChanger from "./RowColorChanger";

const SearchResults = props => {
  if (props.results) {
    return (
      <div>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">id</th>
              <th scope="col">title</th>
              <th scope="col">first Name</th>
              <th scope="col">surname</th>
              <th scope="col">email</th>
              <th scope="col">room id</th>
              <th scope="col">check in date</th>
              <th scope="col">check out date</th>
              <th scope="col">Number of booked nights</th>
            </tr>
          </thead>
          <tbody>
            {props.results.map(el => (
              <RowColorChanger el={el} />
            ))}
          </tbody>
        </table>

        {/* <CustomerProfile/> */}
      </div>
    );
  } else {
    return <span>Loading...</span>;
  }
};

export default SearchResults;
