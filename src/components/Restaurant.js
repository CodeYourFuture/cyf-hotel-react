import React from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div className="ms-5 me-5 ps-5 pe-5">
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
