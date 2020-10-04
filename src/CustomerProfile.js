import React, { useEffect, useState } from "react";

const CustomerProfile = ({ id }) => {
  const [customerProfile, setCustomerProfile] = useState(null);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(responce => responce.json())
      .then(data => setCustomerProfile(data));
  }, [id]);

  return (
    id &&
    (customerProfile ? (
      <>
        <div>Customer profile {customerProfile.id}</div>
        <ul>
          <li>id: {customerProfile.id}</li>
          <li>email: {customerProfile.email}</li>
          <li>phone: {customerProfile.phoneNumber}</li>
          {customerProfile.vip && <li>Vip</li>}
        </ul>
      </>
    ) : (
      <p>Data is loading...</p>
    ))
  );
};
export default CustomerProfile;
