import React, { useState, useEffect } from "react";

const CustomerProfile = ({ id }) => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(res => res.json())
      .then(
        data => {
          setProfile(data);
          setLoading(false);
        },
        error => {
          setError(error.message);
          setLoading(false);
        }
      );
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  } else if (loading) {
    return <div>Loading...</div>;
  } else {
    const { firstName, surname, email, vip, phoneNumber } = profile;
    return (
      <div>
        <h2>
          {firstName} {surname} profile
        </h2>
        <p>{email}</p>
        {vip && <p>VIP client</p>}
        <p>{phoneNumber}</p>
      </div>
    );
  }
};

export default CustomerProfile;
