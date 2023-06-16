import React from "react";
import Order from "./Order";
import classes from "./Restaurant.module.css";

const Restaurant = () => {
  return (
    <div className="my-5 mx-3">
      <h3 className="text-center">Restaurant Orders</h3>
      <ul>
        <Order orderType="Pizzas" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
