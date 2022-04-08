import React from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div className="restaurant-container">
      <h3>Restaurant Orders</h3>
      <ul className="restaurant-container-list">
        <Order order={Order} orderType={"Pizzas"} />
        <Order orderType={"Salads"} />
        <Order orderType={"Cake"} />
      </ul>
    </div>
  );
};

export default Restaurant;
