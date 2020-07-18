import React from "react";
import Orders from "./Order";

const Restaurant = () => {
  return (
    <div className="nav flex-column align-items-center p-4 bg-light">
      <h3>Restaurant Orders</h3>
      <ul className="nav flex-column mt-3">
        <Orders orderType="Pizzas" />
        <Orders orderType="Salad" />
        <Orders orderType="Chocolate Cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
