import React, { useState } from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import CustomerProfile from "./CustomerProfile";

const SearchResults = ({ results, id }) => {
  const [customerId, setCustomerId] = useState("");

  return (
    <div>
      <table className="table">
        <thead>
          <TableHead />
        </thead>
        <tbody>
          <TableBody data={results} color="red" />
          <CustomerProfile id={id} />
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
