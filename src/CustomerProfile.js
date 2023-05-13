import React, { useState, useEffect } from "react";

function CustomerProfile (props) {

  const [profile, setProfile] = useState("");

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
      });
  }, [props.id]);

    return (
      <div class="card ">
        <div class="card-body" >
          <h5 class="card-title">Customer Profile</h5>
          <p class="card-text"> Customer ID: {profile.id} </p>
          <p class="card-text"> Customer Email: {profile.email} </p>
          <p class="card-text"> Customer Status:{profile.vip ? "Yes" : "No"} </p>
          <p class="card-text"> Customer Phone:{profile.phoneNumber} </p>
        </div>
      </div>
    )
}

export default CustomerProfile