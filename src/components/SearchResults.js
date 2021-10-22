import React, { useState } from "react";

import CustomerProfile from "./CustomerProfile.js";
import TableRow from "./TableRow.js";

const SearchResults = prop => {
  const customer = prop.results;

  const [sortedcustomer, setSortedCustomers] = useState(prop.results);
  const [data, setData] = useState([]);

  const [cusid, setCusId] = useState(0);
  const [isFirst, setIsFirst] = useState(false);

  const viewProfile = index => {
    setCusId(customer[index].id);
    setIsFirst(true);
  };

  const handleClick = p => {
    // setData(customer);
    let result = data.some(ele => ele === p);
    if (result) {
      let desceding = [...customer].sort((a, b) => {
        let fa = a[p].toLowerCase(),
          fb = b[p].toLowerCase();

        if (fa > fb) {
          return -1;
        }
        if (fa < fb) {
          return 1;
        }
        return 0;
      });
      setSortedCustomers(desceding);
      setData([]);
    } else {
      let s = [...customer].sort((a, b) => {
        let fa = a[p].toLowerCase(),
          fb = b[p].toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
      setData(data.concat(p));

      setSortedCustomers(s);
    }

    console.log(sortedcustomer);
  };
  return (
    <>
      <table className="table table-responsive table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th onClick={() => handleClick("title")} scope="col">
              title
            </th>
            <th onClick={() => handleClick("firstName")} scope="col">
              First Name
            </th>
            <th onClick={() => handleClick("surname")} scope="col">
              Last Name
            </th>
            <th onClick={() => handleClick("email")} scope="col">
              Email
            </th>
            <th scope="col">RoomId</th>
            <th scope="col">CheckInDate</th>
            <th scope="col">CheckOutDate</th>
            <th scope="col">Nights Stay</th>
            <th scope="col">New Col</th>
          </tr>
        </thead>
        <tbody>
          {[...sortedcustomer].map((customer, index) => {
            return (
              <TableRow
                key={index}
                handleClick={() => {
                  viewProfile(index);
                }}
                customer={customer}
                class={index}
              />
            );
          })}
        </tbody>
      </table>
      {isFirst && <CustomerProfile id={cusid} />}
    </>
  );
};

export default SearchResults;
