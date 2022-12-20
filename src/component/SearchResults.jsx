import React, { useState } from "react";

import CustomerProfile from "./CustomerProfile";
import Bookingrows from "./Bookingrows";

function SearchResults({ results, showProfile }) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">firstname</th>
            <th scope="col">surname</th>
            <th scope="col">email</th>
            <th scope="col">roomid</th>
            <th scope="col">check in date</th>
            <th scope="col">check out date</th>
            <th scope="col">number of nights</th>
            <th scope="col">Profile</th>
          </tr>
        </thead>
        <tbody>
          {results.map((item, index) => {
            return <Bookingrows key={item.email} item={item} index={index} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default SearchResults;
