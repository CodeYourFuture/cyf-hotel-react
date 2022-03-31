import React, { useState } from "react";
import RestaurantButton from "./components/RestaurantButton";

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
