import React, { useState, useEffect } from "react";

const CustomerProfile = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://cyf-react.illicitonion.com/customers/${props.id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [props.id]);
  return (
    <div>
      <p>"Customer Profile {data.id} "</p>
      {data.vip ? <p>"VIP"</p> : null}
      <p>
        "Name: {data.title} {data.firstName} {data.surname}"
      </p>
      <p>"Phone number: {data.phoneNumber}"</p>
      <p>"Email: {data.email} "</p>
    </div>
  );
};

export default CustomerProfile;
