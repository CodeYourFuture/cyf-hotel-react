import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div className="center">
      <h3>Restaurant Orders</h3>
      <ul>
        <Order />
      </ul>
    </div>
  );
};

export default Restaurant;
