import React, { useState, useEffect } from "react";

const CustomerProfile = ({ id }) => {
  const [profileData, setCustomerData] = useState(displayProfile(""));
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`).then(response => {
      if (response.ok) {
        response
          .json()
          .then(data => setCustomerData(displayProfile(data)))
          .catch(() => setCustomerData(displayProfile("")));
      }
    });
  }, [id]);

  return profileData;
};
export default CustomerProfile;

function displayProfile(profileData) {
  if (profileData) {
    return (
      <div>
        <h4>Customer {profileData.id} Profile</h4>
        <ul>
          <li>Email: {profileData.email}</li>
          <li>VIP: {profileData.vip ? "Yes" : "No"}</li>
          <li>Phone No.: {profileData.phoneNumber}</li>
        </ul>
      </div>
    );
  }
  return <div />;
}
