import React, { useState } from "react";
import SearchResultsTableRows from "./SearchResultsTableRows";
import CustomerProfile from "./CustomerProfile";
const SearchResults = props => {
  const [profileId, setProfileId] = useState(null);

  function getProfileId(id) {
    setProfileId(id);
  }

  return (
    <div>
      <table className="table table-sm">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check-In</th>
            <th scope="col">Check-Out</th>
            <th scope="col">Nights</th>
            <th scope="col">Profiles</th>
          </tr>
        </thead>
        <tbody>
          {props.result.map(booking => (
            <SearchResultsTableRows
              key={booking.id}
              booking={booking}
              getProfileId={getProfileId}
            />
          ))}
        </tbody>
      </table>
      {profileId ? <CustomerProfile id={profileId} /> : null}
    </div>
  );
};

export default SearchResults;
