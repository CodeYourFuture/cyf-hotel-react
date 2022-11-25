import React from "react";
import Order from "./Component/Order";

const Restaurant = () => {
  // const pizzas = 0;
  return (
    <div className="restaurant-order">
      <h3>Restaurant Orders</h3>
      <Order orderType={"Pizzas"} />
      <Order orderType={"Salads"} />
      <Order orderType={"Chocolate cake"} />
    </div>
  );
};

export default Restaurant;
