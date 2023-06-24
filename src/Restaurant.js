import React from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div className="orders-container">
      <h3 className="orders-header">Restaurant Orders</h3>
      <ul className="order">
        <Order  orderType="Pizzas"/>
        <Order  orderType="Salads"/>
        <Order  orderType="Chocolate Cake"/>
      </ul>
    </div>
  );
};

export default Restaurant;
