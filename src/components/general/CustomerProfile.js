import React, { useEffect, useState } from "react";

const CustomerProfile = props => {
  const [info, setInfo] = useState("");

  useEffect(() => {
    props.guestId &&
      fetch(`https://cyf-react.glitch.me/customers/${props.guestId}`)
        .then(res => res.json())
        .then(data => setInfo(data));
  }, [props.guestId]);
  return (
    info && (
      <div>
        <p>Customer ID: {props.guestId}</p>
        <p>Customer email:{info.email}</p>
        <p>{info.vip ? "vip guest" : "OLAGH"}</p>
        <p>phone number:{info.phoneNumber}</p>
      </div>
    )
  );
};
export default CustomerProfile;
