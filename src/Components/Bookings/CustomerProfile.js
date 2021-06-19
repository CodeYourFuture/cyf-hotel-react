import React, { useEffect, useState } from "react";

const CustomerProfile = props => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }, [props.id]);
  if (props.id) {
    console.log("This is the id in Component:", props.id);
    return (
      <div>
        <p>Customer {props.id} Profile</p>
        <p>Title:{data.title}</p>
        <p>Name:{data.firstName}</p>
        <p>Surname:{data.surname}</p>
        <p>Email:{data.email}</p>
        <p>Phone-number:{data.phoneNumber}</p>
        <p>VIP:{data.vip ? "Yes" : "No"}</p>
      </div>
    );
  } else {
    console.log("No data received yet");
    return <div />;
  }
};

export default CustomerProfile;
