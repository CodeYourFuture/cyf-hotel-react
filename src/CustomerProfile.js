import React, { useState, useEffect } from "react";

function CustomerProfile({ id }) {
  const [customer, setCustomer] = useState(null);
  console.log(customer);
  useEffect(() => {
    if (id !== "") {
      fetch(`https://cyf-react.glitch.me/customers/${id}`)
        .then(res => res.json)
        .then(data => setCustomer(data));
    }
  }, [id]);

  return (
    <div class="card w-75">
      <div class="card-body">
        <h5 class="card-title">
          <b>Customer Profile</b>
        </h5>
        <p class="card-text">
          <p>
            <b>Title : </b>
          </p>
        </p>
        <p class="card-text">
          <p>
            <b>Firstname : </b>
          </p>
        </p>
        <p class="card-text">
          <p>
            <b>Surname : </b>
          </p>
        </p>
        <p class="card-text">
          <p>
            <b>Email : </b>
          </p>
        </p>
        {/* <p class="card-text"><p><b>VIP :</b>{customer.vip ? 'True' : 'False'} </p> */}
        <p class="card-text">
          <p>
            <b>Phone Number : </b>
          </p>
        </p>
      </div>
    </div>
  );
}

export default CustomerProfile;
