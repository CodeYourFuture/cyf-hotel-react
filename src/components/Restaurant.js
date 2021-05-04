import React, { useState } from "react";
import Order from "./Order.js";
import "./Restaurant.css";

const Restaurant = () => {
  return (
    <div className="restaurant">
      <h4>Restaurant Orders</h4>
      <ul className="order">
        <Order orderType="Pizzas" />
        <br />
        <Order orderType="Salads" />
        <br />
        <Order orderType="Chocolate" />
      </ul>
    </div>
  );
};

export default Restaurant;
