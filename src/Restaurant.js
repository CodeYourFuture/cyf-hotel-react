import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
import Order from "./Order";

const Restaurant = props => {
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
