import React, { useEffect, useState } from "react";
import TableRow from "./TableRow";
// import CustomerProfile from "./CustomerProfile";

const SearchResults = props => {
  return (
    <div>
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
            <TableRow
              booking={booking}
              index={index}
              returnButton={props.returnButton}
            />
          ))}
        </tbody>
      </table>
      {/* <CustomerProfile /> */}
    </div>
  );
};
export default SearchResults;
