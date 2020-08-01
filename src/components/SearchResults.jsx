import React, { useState } from "react";

import Bookings from "./Bookings";
import CustomerProfile from "./CustomerProfile";
import TableRow from "./TableRow";
function SearchResults({ results }) {
  const [customerId, setCustomerId] = useState(null);
  const sortedResults = [...results];
  const [sortedField, setSortedField] = useState(null);
  if (sortedField !== null) {
    sortedResults.sort((a, b) => {
      if (a[sortedField] < b[sortedField]) {
        return -1;
      }
      if (a[sortedField] > b[sortedField]) {
        return 1;
      }
      return 0;
    });
  }

  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">
              <button type="button" onClick={() => setSortedField("id")}>
                Id
              </button>
            </th>
            <th scope="col">
              <button type="button" onClick={() => setSortedField("firstName")}>
                firstName
              </button>
            </th>

            <th scope="col">
              <button type="button" onClick={() => setSortedField("surname")}>
                surname
              </button>
            </th>
            <th scope="col">
              <button type="button" onClick={() => setSortedField("email")}>
                email
              </button>
            </th>
            <th scope="col">
              <button type="button" onClick={() => setSortedField("roomId")}>
                RoomId
              </button>
            </th>
            <th scope="col">
              <button
                type="button"
                onClick={() => setSortedField("checkInDate")}
              >
                check In Date
              </button>
            </th>
            <th scope="col">
              <button
                type="button"
                onClick={() => setSortedField("checkOutDate")}
              >
                check Out Date
              </button>
            </th>

            <th scope="col">Number Of Nights</th>
            <th scope="col">Show Profile</th>
          </tr>
        </thead>
        <tbody>
          {sortedResults.map((customer, index) => {
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
