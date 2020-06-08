import React, { useState, useEffect } from "react";
function CustomerProfile(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(res => res.json())
      .then(data => setData(data));
  }, [props.id]);

  return (
    <ul>
      <li>{data.id} </li>
      <li>{data.email}</li>
      {data.vip && <li>{data.phoneNumber}</li>}
    </ul>
  );
}
export default CustomerProfile;
