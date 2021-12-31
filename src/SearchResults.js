import React from "react";
import TableRow from "./TableRow";
import CustomerProfile from "./CustomerProfile";
import { useState } from "react";

function SearchResults(props) {
  const [customerId, setCustomerId] = useState("");

  function selectedId(id) {
    setCustomerId(() => {
      return id;
    });
  }
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#id </th>
            <th scope="col">Title</th>
            <th scope="col">first name</th>
            <th scope="col">surname</th>
            <th scope="col">email</th>
            <th scope="col">room id</th>
            <th scope="col">check in date</th>
            <th scope="col">check out date</th>
            <th scope="col">nights</th>
            <th scope="col">show profile</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map(result => (
            <TableRow data={result} setRecordedId={selectedId} />
          ))}
        </tbody>
      </table>
      <CustomerProfile id={customerId} />
    </div>
  );
}

export default SearchResults;
