import React from "react";
import Order from "./Components/Order";

const Restaurant = () => {
  return (
    <div className="d-flex flex-column align-items-center">
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
