import React, { useState } from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import CustomerProfile from "./CustomerProfile";

const SearchResults = ({ results }) => {
  const [id, setId] = useState(null);

  const handleSetId = customerId => {
    if (customerId === id) {
      // when clicked on the same customer's button hide the profile
      setId(null);
    } else {
      setId(customerId);
    }
  };

  return (
    <>
      <table className="table">
        <TableHead />
        <TableBody bookings={results} handleButtonClick={handleSetId} />
      </table>
      {id && <CustomerProfile id={id} />}
    </>
  );
};

export default SearchResults;
