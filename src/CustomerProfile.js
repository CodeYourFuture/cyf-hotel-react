import React, { useState, useEffect } from "react";

function CustomerProfile(props) {
  const [detail, setDetail] = useState({});
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(res => res.json())
      .then(data => setDetail(data));
  }, [props.id]);
  return (
    <>
      <ul>
        <li>
          <p>
            <b>customer ID:</b>
            {detail.id}
          </p>
        </li>
        <li>
          <p>
            <b>First name:</b>
            {detail.firstName}
          </p>
        </li>
        <li>
          <p>
            <b>Email:</b>
            {detail.email}
          </p>
        </li>
        <li>
          <p>
            <b>Phone number:</b>
            {detail.phoneNumber}
          </p>
        </li>
        {/* <li>
                    <p><b>VIP:</b>{ detail.vip}</p>
                </li> */}
      </ul>
    </>
  );
}
export default CustomerProfile;
