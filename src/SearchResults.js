import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";

import SearchResultsLine from "./SearchResultsLine";
import TableHead from "./TableHead";

const SearchResults = ({ results }) => {
  const [chosenProfile, setChosenProfile] = useState("");
  const chooseProfile = customerId => {
    setChosenProfile(customerId);
  };
  return (
    <>
      <table className="table">
        <TableHead />
        <tbody>
          {results.map((item, ind) => (
            <SearchResultsLine
              item={item}
              ind={ind}
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
