import React, { useState, useEffect } from "react";

function CustomerProfile({ id }) {
  console.log(id);

  const [customer, setCustomer] = useState("");
  console.log(customer);
  useEffect(() => {
    if (id !== "") {
      fetch(`https://cyf-react.glitch.me/customers/${id}`)
        .then(res => res.json())
        .then(data => setCustomer(data))
        .catch(err => console.log(err));
    }
  }, [id]);

  return (
    <div className="d-flex justify-content-center mb-5 profile_info">
      <div class="card w-75  border-0">
        <div class="card-body p-5">
          <h5 class="card-title">
            <b>Profile of customer with ID {id}</b>
          </h5>
          <p class="card-text">
            <p>
              <b>Title :</b> {customer.title}
            </p>
          </p>
          <p class="card-text">
            <p>
              <b>Firstname : </b> {customer.firstName}
            </p>
          </p>
          <p class="card-text">
            <p>
              <b>Surname : </b> {customer.surname}
            </p>
          </p>
          <p class="card-text">
            <p>
              <b>Email : </b> {customer.email}
            </p>
          </p>
          <p class="card-text">
            <b>VIP :</b> {customer.vip ? "True" : "False"}
          </p>
          <p class="card-text">
            <p>
              <b>Phone Number : </b> {customer.phoneNumber}
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CustomerProfile;
