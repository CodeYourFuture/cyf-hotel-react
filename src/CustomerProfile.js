import React, { useState, useEffect } from "react";

const CustomerProfile = props => {
  const [customerProfile, setCustomerProfile] = useState(null);
  useEffect(() => {
    console.log("Fetching data");

    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(res => res.json())
      .then(data => {
        setCustomerProfile(data);
        console.log(props.id);
        console.log(customerProfile);
      });
  }, [props.id, customerProfile]);

  return !customerProfile ? (
    <p>Not loading yet</p>
  ) : (
    <div>
      <p>Customer {props.id} Profile</p>
      <ul>
        {Object.keys(customerProfile).map(function(key) {
          return (
            <li key={(Math.random() * 10000000000).toString()}>
              {key}: {customerProfile[key]}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CustomerProfile;
