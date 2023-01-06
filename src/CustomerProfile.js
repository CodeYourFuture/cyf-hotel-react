import React, { useEffect, useState } from "react";
// import SearchResults from "./SearchResults";

const CustomerProfile = props => {
  const [customerId, setCustomerId] = useState(null);
  const [showProfile, setShowProfile] = useState(false);

  function getProfile() {
    fetch(`https://cyf-react.glitch.me/customers/${props.customerBk.id}`)
      .then(res => res.json())
      .then(data => setCustomerId(data), setShowProfile(true))
      .catch(error => console.log(error));
  }

  useEffect(() => {
    if (props.customerBk) {
      getProfile();
    }
  }, [props.customerBk]);

  if (!customerId) {
    return null;
  }

  return (
    <div>
      <br />
      <br />
      {showProfile && (
        <div className="newP">
          <h3>Customer Profile</h3>
          <p>Id:{customerId.id} </p>
          <p>Email: {customerId.email}</p>
          <p>Phone number: {customerId.phoneNumber}</p>
          {customerId.vip && <p>VIP</p>}
        </div>
      )}
    </div>
  );
};

export default CustomerProfile;
