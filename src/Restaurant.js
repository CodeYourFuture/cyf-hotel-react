import React from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <Order orderType={"Pizzas"} />
      <Order orderType={"Salad"} />
      <Order orderType={"Cake"} />
    </div>
  );
};

export default Restaurant;
