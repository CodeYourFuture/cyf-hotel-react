import React, { useState, useEffect } from "react";
const CustomerProfile = props => {
  const [email, setEmail] = useState(null);
  const [vip, setVip] = useState("");
  const [phone, setPhone] = useState(null);

  // // use effect
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(res => res.json())
      .then(data => {
        data.email ? setEmail(data.email) : setEmail("No email found.");
        data.vip ? setVip("true") : setVip("false");
        data.phoneNumber
          ? setPhone(data.phoneNumber)
          : setPhone("No Phone number found.");
        console.log(data);
        return data;
      });
  }, [props.id]);

  return (
    <div>
      <p className="mr-2">
        Customer ID :<span className="text-danger h4"> {props.id}</span> <br />
        Email : {email} <br />
        VIP : {vip} <br />
        Phone : {phone}
      </p>
    </div>
  );
};

export default CustomerProfile;
