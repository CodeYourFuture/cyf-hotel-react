import React, { useState, useEffect } from "react";

const CustomerProfile = (props) => {
 const [customerProfileData, setCustomerProfileData] = useState("");

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then((res) => res.json())
      .then((data) => {
        setCustomerProfileData(data);
      });
  }, [props.id]);

    return (
      <div className="customer-profile-container">
        <h3 className="font-weight-bold">Customer Profile</h3>
        <p className="font-weight-bold">
          Customer ID:{" "}
          <span className="font-weight-normal">{customerProfileData.id}</span>
        </p>
        <p className="font-weight-bold">
          Customer Name:{" "}
          <span className="font-weight-normal">
            {customerProfileData.title} {customerProfileData.firstName}{" "}
            {customerProfileData.surname}
          </span>
        </p>
        <p className="font-weight-bold">
          Customer Email:{" "}
          <span className="font-weight-normal">
            {customerProfileData.email}
          </span>
        </p>
        <p className="font-weight-bold">
          Customer Phone Number:{" "}
          <span className="font-weight-normal">
            {customerProfileData.phoneNumber}
          </span>
        </p>
        <p className="font-weight-bold">
          VIP :{" "}
          <span className="font-weight-normal">
            {customerProfileData.vip ? "Yes" : "No"}
          </span>
        </p>
      </div>

      //   <div class="card ">
      //     <div class="card-body" >
      //       <h5 class="card-title">Customer Profile</h5>
      //       <p class="card-text"> Customer ID: {profile.id} </p>
      //       <p class="card-text"> Customer Email: {profile.email} </p>
      //       <p class="card-text"> Customer Status:{profile.vip ? "Yes" : "No"} </p>
      //       <p class="card-text"> Customer Phone:{profile.phoneNumber} </p>
      //     </div>
      //   </div>
    );
};

export default CustomerProfile


