import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";
import SearchResultsRow from "./SearchResultsRow";

const SearchResults = (props) => {
  const [selectedID, setSelectedId] = useState(null);

  function handleClickOnShowProfile(id) {
    setSelectedId(id);
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check in Date</th>
            <th scope="col">Check out date</th>
            <th scope="col">Number of nights</th>
            <th scope="col">Show profile</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((data) => {
            return <SearchResultsRow booking={data} />;
          })}
          ;
        </tbody>
      </table>
      <CustomerProfile id={selectedID} />
    </>
  );
};

export default SearchResults;
