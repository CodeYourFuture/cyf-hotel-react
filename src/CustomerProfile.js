import React, { useState, useEffect } from "react";
//import Search from "./Search.js";

const CustomerProfile = props => {
  if (!props.id) return <p>select customer to show their file </p>;
  else
    return (
      <ul>
        <li>Customer {props.id} Profile :</li>
        <li>The Email: {props.email}</li>
        <li>The VIP Status: {props.vip}</li>
      </ul>
    );
};
export default CustomerProfile;
