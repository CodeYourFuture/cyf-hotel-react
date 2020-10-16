import React from "react";
import "./Order.css";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div className="order-container">
      <div className="page-header">
        <h4 className="text-left">Restaurant Orders</h4>
      </div>
      <div id="orders">
        <Order orderType="Pizzas" />
        <Order orderType="Salad" />
        <Order orderType="Chocolate Cake" />
      </div>
    </div>
  );
};

export default Restaurant;
