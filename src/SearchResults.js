import React, { useState } from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import CustomerProfile from "./CustomerProfile";

const SearchResults = ({ results, id }) => {
  const [customerId, setCustomerId] = useState("");

  function changeId(id) {
    id > 0 && setCustomerId(id);
  }

  return (
    <div>
      <table className="table">
        <TableHead />
        <TableBody bookings={results} changeId={changeId} />
        <CustomerProfile id={customerId} />
      </table>
    </div>
  );
};

export default SearchResults;
