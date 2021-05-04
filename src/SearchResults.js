import React, { useState } from "react";
import TableRow from "./TableRow";
import CustomerProfile from "./CustomerProfile";

function SearchResults(props) {
  const [selectedCustomer, setSelectedCustomer] = useState("");

  function selectCustomer(customerId) {
    setSelectedCustomer(customerId);
  }

  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room Id</th>
            <th scope="col">Check in Date</th>
            <th scope="col">Check out Date</th>
            <th scope="col">Number of Nights Stay</th>
            <th scope="col">Customer Profile</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((result, index) => (
            <TableRow
              result={result}
              key={index}
              selectCustomer={selectCustomer}
            />
          ))}
        </tbody>
      </table>
      <CustomerProfile id={selectedCustomer} />
    </div>
  );
}

export default SearchResults;
