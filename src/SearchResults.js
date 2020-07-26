import React, { useState } from "react";
import TableRow from "./TableRow.js";
import CustomerProfile from "./CustomerProfile.js";

function SearchResults(props) {
  const [showProfile, setShowProfile] = useState(false);

  function handleProfileClick() {
    setShowProfile(true);
    console.log("ShowProfile button is clicked");
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id </th>
            <th scope="col">Title </th>
            <th scope="col">First Name </th>
            <th scope="col">Surname </th>
            <th scope="col">Email </th>
            <th scope="col">Room id </th>
            <th scope="col">Check In Date </th>
            <th scope="col">Check Out Date </th>
            <th scope="col">Number of Nights</th>
            <th scope="col"> </th>
          </tr>
        </thead>
        <tbody>
          {props.results.map(result => {
            return (
              <>
                <TableRow
                  key={result.id}
                  result={result}
                  handleProfileClick={handleProfileClick}
                />
                {showProfile ? <CustomerProfile id={result.id} /> : null}
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default SearchResults;
