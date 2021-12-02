import React, { useState, useEffect } from "react";

const CustomerProfile = ({ profileID }) => {
  const [data, setData] = useState({});
  const [profile, setProfile] = useState(false); // conditional rendering for the customer profile

  useEffect(() => {
    profileID &&
      fetch(`https://cyf-react.glitch.me/customers/${profileID}`)
        .then(response => {
          console.log("API was called with profileID:", profileID);
          return response.json();
        })
        .then(data => {
          setProfile(profileID);
          setData(data);
        })
        .catch(error => console.log(error));
  }, [profileID]);

  return profile ? (
    <div className="card w-50 d-flex align-items-center">
      <h3 className="mt-2">{`${data.title} ${data.firstName} ${
        data.surname
      }`}</h3>
      <div className="text-center p-5 m-5">
        <p>{data.email}</p>
        <p>{data.phoneNumber}</p>
        <p>{`${
          data.vip
            ? "One of our trusted VIPS"
            : "One of our most valued customers"
        }`}</p>
      </div>
    </div>
  ) : null;
};

export default CustomerProfile;
