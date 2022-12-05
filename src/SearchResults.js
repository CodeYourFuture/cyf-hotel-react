import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";
import TableRow from "./TableRow";

function SearchResults({ results }) {
  const [currentCustomer, setCurrentCustomer] = useState("");

  const fetchData = async id => {
    const res = await fetch(`https://cyf-react.glitch.me/customers/${id}`);
    const data = await res.json();
    setCurrentCustomer(data);
  };

  const showCustomerProfile = id => {
    fetchData(id);
  };

  return (
    <div>
      <table class="customer-table table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">First name</th>
            <th scope="col">Surename</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">Staying duration</th>
            <th scope="col">Profile</th>
          </tr>
        </thead>
        <tbody>
          {results.map(room => {
            return (
              <TableRow
                key={room.id}
                {...room}
                showCustomerProfile={showCustomerProfile}
              />
            );
          })}
        </tbody>
      </table>
      <CustomerProfile {...currentCustomer} />
    </div>
  );
}
export default SearchResults;
