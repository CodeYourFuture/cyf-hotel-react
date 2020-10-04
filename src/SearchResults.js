import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";

import SearchResultsLine from "./SearchResultsLine";

const SearchResults = ({ results }) => {
  const [chosenProfile, setChosenProfile] = useState("");
  const chooseProfile = customerId => {
    setChosenProfile(customerId);
  };
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Title</th>
            <th scope="col">First name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">Qty of nights</th>
          </tr>
        </thead>
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
