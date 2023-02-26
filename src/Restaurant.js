import React, { useState } from "react";
// import RestaurantButton from "./RestaurantButton.js";
import Order from "./Order.js";

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="Pizzas" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate Cake" />
        <Order orderType="Banana pie" />
        <Order orderType="Sugarcane" />
      </ul>
    </div>
  );
};

export default Restaurant;
