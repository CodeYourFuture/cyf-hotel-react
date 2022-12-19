import React, { useState } from "react";
import TableRow from "./TableRow";
import CustomerProfile from "./CustomerProfile";
function searchResults({ results }) {
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
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">first name</th>
            <th scope="col">surname</th>
            <th scope="col">email</th>
            <th scope="col">room id</th>
            <th scope="col">check in date</th>
            <th scope="col">check out date</th>
            <th scope="col">number of nights</th>
          </tr>
        </thead>
        <tbody>
          {results.map(item => {
            return (
              <TableRow
                key={item.id}
                item={item}
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
export default searchResults;
