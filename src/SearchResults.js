import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";

import SearchResultsLine from "./SearchResultsLine";
import TableHead from "./TableHead";

const SearchResults = ({ results, sortBookings }) => {
  console.log(results);
  const [chosenProfile, setChosenProfile] = useState("");
  const chooseProfile = customerId => {
    setChosenProfile(customerId);
  };
  return (
    <>
      <table className="table">
        <TableHead sortBookings={sortBookings} />
        <tbody>
          {results.map((item, ind) => (
            <SearchResultsLine
              key={item.id}
              item={item}
              chooseProfile={chooseProfile}
            />
          ))}
        </tbody>
      </table>
      <CustomerProfile id={chosenProfile} />
    </>
  );
};

export default SearchResults;
