import React, { useState, useEffect } from "react";
import ShowProfile from "./ShowProfile.js";
import BookingRows from "./BookingRows.js";

const SearchResults = props => {
  const [profile, setProfile] = useState("");
  const [customerId, setCustomerId] = useState("");
  const profileState = profileData => {
    setProfile(profileData);
  };
  useEffect(() => {
    if (customerId !== "") {
      fetch(`https://cyf-react.illicitonion.com/customers/${customerId}`)
        .then(results => results.json())
        .then(data => profileState(data));
    } else {
      profileState("");
    }
  }, [customerId]);
  const showProfile = id => {
    setCustomerId(id);
  };
  return (
    <div id="SearchResults" className="SearchResults_CSS">
      <table>
        <thead>
          <tr>
            <th className="Head_TH_CSS" />
            <th className="Head_TH_CSS">Title</th>
            <th className="Head_TH_CSS">First Name</th>
            <th className="Head_TH_CSS">Last Name</th>
            <th className="Head_TH_CSS">Email</th>
            <th className="Head_TH_CSS">Room id</th>
            <th className="Head_TH_CSS">Check in date</th>
            <th className="Head_TH_CSS">Check out date</th>
            <th className="Head_TH_CSS">Nights</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((element, index) => {
            return (
              <BookingRows
                show={showProfile}
                element={element}
                key={index}
                index={index}
              />
            );
          })}
        </tbody>
      </table>
      {profile ? (
        <ShowProfile
          closeProfile={showProfile}
          profileState_F={profileState}
          profileData={profile}
        />
      ) : null}
    </div>
  );
};

export default SearchResults;
