import React from "react";

import Orders from "./Orders";
const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Orders orderType="pizza" />
        <Orders orderType="salads" />
        <Orders orderType="Chocolate cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
