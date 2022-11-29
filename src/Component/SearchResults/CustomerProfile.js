import React, { useState, useEffect } from "react";

const CustomerProfile = ({ id }) => {
  const [profile, setProfile] = useState({});
  const [customerId, setCustomerId] = useState(null);
  const [display, setDisplay] = useState(false);

  const showProfile = () => {
    setCustomerId(id);
    !display ? setDisplay(true) : setDisplay(false);
  };

  useEffect(() => {
    if (customerId) {
      fetch(`https://cyf-react.glitch.me/customers/${customerId}`)
        .then(res => res.json())
        .then(data => setProfile(data))
        .catch(error => console.log(error));
    }
  }, [customerId]);

  return (
    <>
      <button onClick={showProfile} className="btn btn-primary">
        {!display ? "Show profile" : "Hide Profile"}
      </button>
      {display && (
        <div className="customer-profile">
          <p>Customer profile</p>
          <ul>
            <li>Id: {profile.id}</li>
            <li>Title: {profile.title}</li>
            <li>First name: {profile.firstName}</li>
            <li>Surname: {profile.surname}</li>
            <li>Email: {profile.email}</li>
            <li>Phone Number: {profile.phoneNumber}</li>
            {profile.vip && <li>VIP</li>}
          </ul>
        </div>
      )}
    </>
  );
};

export default CustomerProfile;
