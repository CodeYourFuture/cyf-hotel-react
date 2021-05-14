import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";
import SearchResultRow from "./SearchResultRow";

const SearchResults = props => {
  const [customerId, setCustomerId] = useState("");

  const selectCustomer = id => {
    setCustomerId(id);
  };

  return (
    <div className="overflow-auto">
      <table className="table">
        <thead className="thead-dark text-center">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room</th>
            <th scope="col">Check in</th>
            <th scope="col">Check out</th>
            <th scope="col">Nights</th>
            <th scope="col">Profile</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {props.results.map((person, index) => (
            <SearchResultRow
              key={index}
              person={person}
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
