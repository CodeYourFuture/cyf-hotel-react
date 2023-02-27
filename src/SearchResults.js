import React, { useState } from "react";
import BookingsRow from "./BookingsRow";
import CustomerProfile from "./CustomerProfile";

const SearchResults = (props) => {
  let [profileId, setProfileId] = useState(0);
  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First name</th>
            <th scope="col">Surname</th>
            <th scope="col">EMAIL</th>
            <th scope="col">Room id</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">Number of nights</th>
            <th scope="col">Profile</th>
          </tr>
        </thead>
        <tbody>
          {props.results !== [] ? (
            props.results.map((guest) => (
              <BookingsRow
                key={guest.roomId}
                guest={guest}
                changeId={setProfileId}
              />
            ))
          ) : (
            <tr>
              <th scope="row">Loading...</th>
              <td>Loading...</td>
              <td>Loading...</td>
              <td>Loading...</td>
              <td>Loading...</td>
              <td>Loading...</td>
              <td>Loading...</td>
              <td>Loading...</td>
              <td>Loading...</td>
              <td>Loading...</td>
            </tr>
          )}
        </tbody>
      </table>
      <CustomerProfile id={profileId} />
    </div>
  );
};

export default SearchResults;
