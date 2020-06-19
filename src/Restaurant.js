import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton"
import Order from "./Order"


const Restaurant = () => {
  return (
    <div>
      <h3 className="ordersHeader">Restaurant Orders</h3>
      <ul className="orders">
        <li><Order orderType="Pizza" /></li>
        <li><Order orderType="Salad" /></li>
        <li><Order orderType="Chocolate-cake" /></li>
      </ul>
    </div>
  );
};

export default Restaurant;
