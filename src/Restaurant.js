import React from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div className="orders">
      <h2>Restaurant Orders</h2>
      <ul>
        <Order orderType={"Pizzas"} />
        <Order orderType={"Salad"} />
        <Order orderType={"Chocolate"} />
      </ul>
    </div>
  );
};

export default Restaurant;
