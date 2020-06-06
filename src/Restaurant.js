import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton"
import Order from "./Order"
import OrderType from "./OrderType"

const Restaurant = () => {


  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li><Order orderType="Pizza" /></li>
        <li><Order orderType="Salad" /></li>
        <li><Order orderType="Chocolate-cake" /></li>
      </ul>

    </div>
  );
};

export default Restaurant;
