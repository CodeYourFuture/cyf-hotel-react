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
    setCusId(index);
    setIsFirst(true);
  };

  const handleClick = field => {
    if (
      field === "firstName" ||
      field === "title" ||
      field === "surname" ||
      field === "email"
    ) {
      [...customer].map(customer => customer[field].toLowerCase());
    }

    let descending;
    let result = data.some(result => result === field);
    if (result) {
      descending = [...customer].sort((a, b) => {
        let fa = a[field],
          fb = b[field];

        if (fa > fb) {
          return -1;
        }
        if (fa < fb) {
          return 1;
        }
        return 0;
      });

      setSortedCustomers(descending);
      setData([]);
    } else {
      let ascending;

      ascending = [...customer].sort((a, b) => {
        let fa = a[field],
          fb = b[field];

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });

      setData(data.concat(field));

      setSortedCustomers(ascending);
    }
  };
  return (
    <>
      <table className="table table-responsive table-hover table-dark">
        <thead>
          <tr>
            <th onClick={() => handleClick("id")} scope="col">
              id
            </th>
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
            <th onClick={() => handleClick("roomId")} scope="col">
              RoomId
            </th>
            <th onClick={() => handleClick("checkInDate")} scope="col">
              CheckInDate
            </th>
            <th onClick={() => handleClick("checkOutDate")} scope="col">
              CheckOutDate
            </th>
            <th onClick={() => handleClick("nightStay")} scope="col">
              Nights Stay
            </th>
            <th scope="col">Profile</th>
          </tr>
        </thead>
        <tbody>
          {[...sortedcustomer].length > 0
            ? [...sortedcustomer].map((customer, index) => {
                return (
                  <TableRow
                    key={index}
                    handleClick={() => {
                      viewProfile(customer.id);
                    }}
                    customer={customer}
                    class={index}
                  />
                );
              })
            : customer.map((customer, index) => {
                return (
                  <TableRow
                    key={index}
                    handleClick={() => {
                      viewProfile(customer.id);
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
