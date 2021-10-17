import React, { useState, useEffect } from "react";
//const[id,setId]

const CustomerProfile = props => {
  const [sid, setSid] = useState(0);
  const [email, setEmail] = useState("");
  const [isVip, setIsVip] = useState(false);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(res => res.json())
      .then(data => {
        if (data) {
          setSid(data.id);
          setEmail(data.email);
          setIsVip(!data.vip);
        }
      });
  }, [props.id]);
  return (
    <div>
      {sid}
      {email}
      <p>true or {isVip} </p>
    </div>
  );
};

export default CustomerProfile;
