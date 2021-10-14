import React, { useState } from "react";
import CreateTableRow from "./CreateTableRow";

const SearchResults = props => {
  const customerData = props.results;

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">title</th>
          <th scope="col">first Name</th>
          <th scope="col">surname</th>
          <th scope="col">email</th>
          <th scope="col">room id</th>
          <th scope="col">check-in date</th>
          <th scope="col">check-out date</th>
          <th scope="col">nights booked in</th>
        </tr>
      </thead>
      {/* {props.results} */}

      <tbody>
        {customerData.map(result => {
          return <CreateTableRow data={result} />;
        })}
      </tbody>
    </table>
  );
};
export default SearchResults;
