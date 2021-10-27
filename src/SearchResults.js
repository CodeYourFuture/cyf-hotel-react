import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";
import SearchResultRow from "./SearchResultRow";

function SearchResults(props) {
  const [showProfile, setShowProfile] = useState(-1);

  function handleShowProfile(id) {
    setShowProfile(id);
    console.log(id);
  }
  return (
    <div className="flexRow">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">First name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">Days</th>
            <th scope="col">Customer Profile</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((booking, index) => (
            <SearchResultRow
              key={index}
              booking={booking}
              showProfile={handleShowProfile}
            />
          ))}
        </tbody>
      </table>
      <CustomerProfile id={showProfile} />
    </div>
  );
}

export default SearchResults;
