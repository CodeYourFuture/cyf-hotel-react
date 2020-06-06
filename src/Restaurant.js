import React from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div>
      <hr />
      <h3>Restaurant Orders</h3>
      <hr />
      <ul className="odertyp">
        <Order orderType="Pizzas" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate cake" />
        <Order orderType="Baklava" />
      </ul>
      <hr />
    </div>
  );
};

export default Restaurant;
