import React, { useEffect, useState } from "react";

import Row from "./TableRow";

const SearchResults = props => {
  return (
    <table className="table">
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
          <th scope="col">Nights</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((booking, index) => (
          <Row booking={booking} index={index} />
        ))}
      </tbody>
    </table>
  );
};
export default SearchResults;
