import React, { useState } from "react";
import Order from "./Order";
import "./index.css";

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul className="list">
        <Order orderType="Pizzas" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
