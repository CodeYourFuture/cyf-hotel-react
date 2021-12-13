import React from "react";
import Order from "./Order";
const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="pizza" />
        <Order orderType="salads" />
        <Order orderType="chocolate cakes" />
      </ul>
    </div>
  );
};

export default Restaurant;
