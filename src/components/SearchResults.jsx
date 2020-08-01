import React, { useState } from "react";

import Bookings from "./Bookings";
import CustomerProfile from "./CustomerProfile";
import TableRow from "./TableRow";
function SearchResults(props) {
  const [customerId, setCustomerId] = useState(null);

  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Name</th>
            <th scope="col">Surname</th>
            <th scope="col">email</th>
            <th scope="col">RoomId</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check Out Date</th>
            <th scope="col">Number Of Nights</th>
            <th scope="col">Show Profile</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((customer, index) => {
            return (
              <TableRow
                customer={customer}
                setCustomerId={setCustomerId}
                key={index}
              />
            );
          })}
        </tbody>
      </table>
      {customerId ? <CustomerProfile id={customerId} /> : null}
    </div>
  );
}

export default SearchResults;
