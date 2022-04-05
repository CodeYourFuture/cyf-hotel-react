import React from "react";
import Order from "./Order.js";

const Restaurant = () => {
  return (
    <div>
      <h3 className="pt-5">Restaurant Orders</h3>
      <ul>
        <Order orderType={"Pizzas"} />
        <Order orderType={"Salads"} />
        <Order orderType={"Chocolate Cakes"} />
      </ul>
    </div>
  );
};

export default Restaurant;
