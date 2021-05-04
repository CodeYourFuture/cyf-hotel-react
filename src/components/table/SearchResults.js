import React, { useState } from "react";
import CustomerProfile from "../../pages/CustomerProfile";
import TableRow from "./TableRow";

const SearchResults = ({ results }) => {
  const [customerId, setCustomerId] = useState("");

  const selectCustomer = id => {
    setCustomerId(id);
  };

  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Rood Id</th>
            <th scope="col">Check-In Date</th>
            <th scope="col">Check-out Date</th>
            <th scope="col">Total Nights</th>
          </tr>
        </thead>
        <tbody>
          {results.map((customer, index) => (
            <TableRow
              key={index}
              customer={customer}
              index={index}
              selectCustomer={selectCustomer}
            />
          ))}
        </tbody>
      </table>
      <CustomerProfile customerId={customerId} />
    </div>
  );
};

export default SearchResults;
