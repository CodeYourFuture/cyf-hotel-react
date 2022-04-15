import React from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul className="orders">
        <Order orderType={"Pizzas"} />
        <Order orderType={"Salads"} />
        <Order orderType={"Cakes"} />
      </ul>
    </div>
  );
};

export default Restaurant;
