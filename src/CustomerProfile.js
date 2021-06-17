import React, { useState, useEffect } from "react";

const CustomerProfile = ({ props }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [profile, setProfile] = useState([]);
  const { id, email, vip, phoneNumber } = profile;
  useEffect(() => {
    let url = `https://cyf-react.glitch.me/customers/${props}`;
    if (props !== "") {
      fetch(url)
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw response;
          }
        })
        .then(data => {
          setProfile(data);
        })
        .catch(err => {
          console.log(err);
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [props]);
  if (error) return "Oops!";
  return !loading ? (
    <div>
      <p>Customer Profile id : {id}</p>
      <p>Customer email : {email}</p>
      <p>Customer VIP Status : {vip ? "Yes" : "No"}</p>
      <p>Customer Phone Number : {phoneNumber}</p>
    </div>
  ) : null;
};

export default CustomerProfile;
