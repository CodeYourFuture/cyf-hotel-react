import React, { useState } from "react";
import SearchRow from "./SearchRow.jsx";
import CustomerProfile from "./CustomerProfile.jsx";
const SearchResults = ({ results }) => {
  const [customerId, setCustomerId] = useState("");

  function handleClick(e) {
    e.preventDefault();
    setCustomerId(e.target.id);
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">Number of nights</th>
          </tr>
        </thead>
        <tbody>
          {results.map((guestName, index) => {
            return (
              <SearchRow
                key={index}
                info={guestName}
                handleClick={handleClick}
              />
            );
          })}
        </tbody>
      </table>
      <CustomerProfile id={customerId} />
    </div>
  );
};

export default SearchResults;
