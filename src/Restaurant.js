import React from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div>
      <h2 className="h2">Restaurant Orders</h2>
      <Order orderType="pizza" />
      <Order orderType="Chocolate cake" />
      <Order orderType="Salads" />
    </div>
  );
};

export default Restaurant;
