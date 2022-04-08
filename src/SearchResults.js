import React, { useState } from "react";
import Booking from "./Booking.js";
import CustomerProfile from "./CustomerProfile.js";

const SearchResults = props => {
  const [profile, setProfile] = useState();
  const [profileLoaded, setProfileLoaded] = useState(false);
  return (
    <>
      <table className="table table-striped table-bordered table-sm">
        <thead className="thead-dark">
          <tr>
            <th scope="col">id#</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room #</th>
            <th scope="col">Check-In Date</th>
            <th scope="col">Check-Out Date</th>
            <th scope="col"># of Nights</th>
            <th scope="col">Profile</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((booking, id) => (
            <Booking
              key={id}
              booking={booking}
              setProfile={setProfile}
              setProfileLoaded={setProfileLoaded}
              profileLoaded={profileLoaded}
            />
          ))}
        </tbody>
      </table>
      <CustomerProfile
        id={profile}
        setProfile={setProfile}
        profile={profile}
        profileLoaded={profileLoaded}
      />
    </>
  );
};

export default SearchResults;
