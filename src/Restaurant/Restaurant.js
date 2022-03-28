import React from "react";

import Order from "./Order/Order";

import "./Restaurant.css";

const Restaurant = () => {
  return (
    <div className="restaurant">
      <h3>Restaurant Orders</h3>
      <ul className="restaurant-list">
        <Order orderType={"Pizzas"} />
        <Order orderType={"Salads"} />
        <Order orderType={"Chocolate cake"} />
      </ul>
    </div>
  );
};

export default Restaurant;
