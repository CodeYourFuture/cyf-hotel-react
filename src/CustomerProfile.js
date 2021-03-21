import React, { useEffect, useState } from "react";

const CustomerProfile = ({ id }) => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setProfile(data);
        console.log(id);
      })
      .catch(err => {
        console.error(err);
      });
  }, [id]);

  return profile ? (
    <div className="table profileDiv">
      <p>Customer Profile:{profile.id}</p>
      <p>Customer email:{profile.email}</p>
      {profile.vip ? <p>VIP</p> : "Not VIP"}
      <p>Mobile:{profile.phoneNumber}</p>
    </div>
  ) : (
    id && <p>Loading customer profile...</p>
  );
};

export default CustomerProfile;
