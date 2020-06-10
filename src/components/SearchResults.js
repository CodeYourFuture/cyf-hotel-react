import React, { useState } from "react";
import TableRow from "./TableRow";
import CustomerProfile from "./CustomerProfile";

const SearchResults = ({ customerBookings }) => {
  const [id, setId] = useState("");
  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Room #</th>
            <th scope="col">Check-in</th>
            <th scope="col">Check-out</th>
            <th scope="col">Duration</th>
            <th scope="col">Profile</th>
          </tr>
        </thead>
        <tbody>
          {customerBookings.map((customer, index) => {
            return (
              <TableRow
                key={index}
                customerData={customer}
                setCustomerId={setId}
              />
            );
          })}
        </tbody>
      </table>
      <CustomerProfile customerId={id} />
    </div>
  );
};

export default SearchResults;
