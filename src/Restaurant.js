import React from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div className="restaurant-orders my-4">
      <h3>Restaurant Orders</h3>
      <ul className="list-group mx-2">
        <Order orderType={"Pizzas"} />
        <Order orderType={"Salads"} />
        <Order orderType={"Chocolate cake"} />
      </ul>
    </div>
  );
};

export default Restaurant;
