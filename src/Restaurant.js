import React, { useState } from "react";
import Order from "./Order.jsx";
import RestaurantButton from "./RestaurantButton.jsx";

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order />
      </ul>
    </div>
  );
};

export default Restaurant;
