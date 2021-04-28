import React from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div className="app-content container">
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType={"Pizzas"} />
        <Order orderType={"Salads"} />
        <Order orderType={"Chocolate cake"} />
      </ul>
    </div>
  );
};

export default Restaurant;
