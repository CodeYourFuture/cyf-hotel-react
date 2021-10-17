import React, { useState, useEffect } from "react";
import "./CustomerProfile.css";

// Displays customer information when the show Profile button is clicked or
// hides their profile if the button is clicked a second time or another profile is selected.
const CustomerProfile = props => {
  const [profile, setProfile] = useState(null);
  const [customerId, setCustomerId] = useState("");
  const [customers, setCustomers] = useState([]);

  // Updates `customerId` when `props.id` state changes
  useEffect(() => {
    setCustomerId(props.id);
  }, [props.id]);

  // Updates `customers` when `props.data.results` state changes
  useEffect(() => {
    setCustomers(props.data.results);
  }, [props.data.results]);

  // Fetches and updates `profile` when `customerId` state changes, contains a
  // boundary condition to prevent errors when content is not required.
  useEffect(() => {
    if (customerId !== "" && customerId) {
      fetch(`https://cyf-react.glitch.me/customers/${customerId}`)
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
  }, [customerId]);

  // Render profile data if the state variable `profile` and `customers` contain data
  // and `customerId` is not an empty string, otherwise no render takes place.
  return profile && customers && customerId !== "" ? (
    <div className="container p-3 mb-5 shadow border border-1 CustomerProfile-tr rounded">
      <h2 className="text-center">
        Customer {profile.id ? profile.id : customers[customerId - 1].id}{" "}
        Profile
      </h2>
      <ul className="list-unstyled">
        <li className="list-item p-1">
          <b>Type: </b>
          {profile.vip ? "VIP Booking" : "Standard Booking"}
        </li>
        <li className="list-item p-1">
          <b>Customer id: </b>
          {profile.id ? profile.id : customers[customerId - 1].id}
        </li>
        <li className="list-item p-1">
          <b>Email: </b>
          {profile.email ? profile.email : customers[customerId - 1].email}
        </li>
        <li className="list-item p-1">
          <b>Phone Number: </b>
          {profile.phoneNumber
            ? profile.phoneNumber
            : customers[customerId - 1].phoneNumber}
        </li>
      </ul>
    </div>
  ) : null;
};

export default CustomerProfile;
