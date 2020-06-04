import React from "react";
import Order from "./Order";
import "./App.css";

const Restaurant = () => {
  return (
    <div className="restaurand-order">
      <h3>Restaurant Orders</h3>
      <div className="orders">
        <Order orderType="Pizzas" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate cake" />
      </div>
    </div>
  );
};

export default Restaurant;
