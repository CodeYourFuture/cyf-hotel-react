/*eslint linebreak-style: ["error", "windows"]*/
import React, { useState } from "react";
import TableRow from "./TableRow";
import CustomerProfile from "./CustomerProfile";

const SearchResults = ({ results }) => {
  const [customerId, setCostumerId] = useState("");
  function handleId(id) {
    setCostumerId(id);
  }
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
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
          {results.map((profile, index) => (
            <TableRow
              key={index}
              index={index}
              profile={profile}
              handleId={handleId}
            />
          ))}
        </tbody>
      </table>
      <CustomerProfile customerId={customerId} />
    </>
  );
};

export default SearchResults;
