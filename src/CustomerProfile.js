import React, { useState, useEffect } from "react";
import "./CustomerProfile.css";

// Fetches customers booking information and renders the data when a customers Show Profile button is clicked or
// hides their profile if the button is clicked a second time or another profile is selected.
const CustomerProfile = props => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (props.id !== "") {
      fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
        .then(response =>
          response.status >= 200 && response.status <= 299
            ? response.json()
            : new Error(
                `Unexpected Error: ${response.status} ${response.statusText}`
              )
        )
        .then(data => setProfile(data))
        .catch(err => console.log(err));
    }
  }, [props.id]);

  // Render use profile data if the state variable `profile` and `props.id` return true, otherwise no render takes place.
  return profile && props.id ? (
    <div className="container p-3 mb-5 shadow border border-1 CustomerProfile-tr rounded">
      <h2 className="text-center">Customer {profile.id} Profile</h2>
      <ul className="list-unstyled">
        <li className="list-item p-1">
          <b>Type:</b> {profile.vip ? "VIP Booking" : "Standard Booking"}
        </li>
        <li className="list-item p-1">
          <b>Customer id:</b> {profile.id}
        </li>
        <li className="list-item p-1">
          <b>Email:</b> {profile.email}
        </li>
        <li className="list-item p-1">
          <b>Phone Number:</b> {profile.phoneNumber}
        </li>
      </ul>
    </div>
  ) : null;
};

export default CustomerProfile;
