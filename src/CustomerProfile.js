
import React, { useState, useEffect } from "react";

function CustomerProfile({ id,onCloseProfile }) {
  const [customerProfile, setCustomerProfile] = useState();

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCustomerProfile(data);
      });
  }, [id]);

  if(!customerProfile){
    return <p>Data are loading .... Please wait</p>;
  }


return(


  <fieldset class="scheduler-border">
    <button className="closeBtn"  onClick={onCloseProfile}>X</button>
  <legend class="scheduler-border">Customer {id} Profile</legend>
  {customerProfile && (
  <ul class="control-group">
  <li>Customer ID: {customerProfile.id}</li>
          <li>Email: {customerProfile.email}</li>
          <li>VIP: {customerProfile.vip ? "Yes" : "No"}</li>
          <li>Phone Number: {customerProfile.phoneNumber}</li>
  </ul>
  )}

</fieldset>
);

}

export default CustomerProfile;
