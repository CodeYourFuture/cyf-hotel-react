import React from "react";
import Order from "./Order";

const Restaurant = () => {
  //const pizzas = 0;

  return (
    <div className="container">
      <h3>Restaurant Orders</h3>
      <ul className="d-flex justify-content-between">
        <Order orderType="Pizza" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
