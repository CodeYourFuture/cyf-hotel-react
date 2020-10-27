import React, { useEffect, useState } from "react";

const CustomerProfile = ({ id }) => {
  const [clientProfile, setClientProfile] = useState("");
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(res => res.json())
      .then(data => setClientProfile(data));
  }, [id]);

  return (
    id &&
    (clientProfile ? (
      <>
        {" "}
        <div>Customer profile {clientProfile.id}</div>
        <div>
          <p>id:{clientProfile.id}</p>
          <p>email:{clientProfile.email}</p>
          <p>phone:{clientProfile.phoneNumber}</p>
        </div>
      </>
    ) : (
      <p>Loading....</p>
    ))
  );
};
export default CustomerProfile;
