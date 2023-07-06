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
  return <p>Customer {customerProfile.id} Profile</p>;
};
export default CustomerProfile;
