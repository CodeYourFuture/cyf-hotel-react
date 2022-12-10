import React, { useEffect, useState } from "react";
import CustomerInfo from "./CustomerInfo";
import Table from "./Table";

function SearchResults({ results, sortBookings }) {
  const [currentCustomer, setCurrentCustomer] = useState("");

  const fetchData = async id => {
    const res = await fetch(`https://cyf-react.glitch.me/customers/${id}`);
    const data = await res.json();
    setCurrentCustomer(data);
  };

  const showCustomerInfo = id => {
    fetchData(id);
  };

  return (
    <div>
      <table className="customer-table table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col" onClick={sortBookings}>
              First name
            </th>
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
              <Table
                key={room.id}
                {...room}
                showCustomerInfo={showCustomerInfo}
              />
            );
          })}
        </tbody>
      </table>
      <CustomerInfo {...currentCustomer} />
    </div>
  );
}
export default SearchResults;
