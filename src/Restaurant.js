import React, { useState } from "react";
import Order from "./Order";

const Restaurant = () => {
  // const pizzas = 0;

  return (
    <div className="orders">
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="Pizzas" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
