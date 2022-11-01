import React from "react";
import CustomerProfile from "./CustomerProfile";
import TableRow from "./TableRow";
import { useState } from "react";

const SearchResults = ({ bookings }) => {
  let [profileId, setProfileId] = useState(null);
  let getProfileId = id => setProfileId(id);

  return (
    <div className="table-container">
      <p className="results">
        Results:<span> </span>
      </p>
      <table className="table table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">First name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check-in date</th>
            <th scope="col">Check-out date</th>
            <th scope="col">Nr. of nights</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(booking => (
            <TableRow
              booking={booking}
              key={booking.id}
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
