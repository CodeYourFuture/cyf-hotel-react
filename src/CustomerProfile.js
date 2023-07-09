import { useState, useEffect } from "react";

const CustomerProfile = (props) => {
  const [customerProfile, setCustomerProfile] = useState("");

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCustomerProfile(data);
      });
  }, [props.id]);
  return (
    <div>
      <p className="profile-title">Customer {customerProfile.id} Profile</p>
      <div className="profile-flex">
        <p>E-mail: {customerProfile.email}</p>
        <p>Telephone number: {customerProfile.phoneNumber}</p>
        <p>{customerProfile.vip ? "VIP" : null}</p>
      </div>
    </div>
  );
};
export default CustomerProfile;
