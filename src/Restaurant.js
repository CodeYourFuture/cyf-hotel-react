import React from "react";
import Order from "./Order";
import "./Restaurant.css";

const Restaurant = () => {
  return (
    <div className="Restaurant">
      <h3>Restaurant Orders</h3>
      <Order orderType={"Pizzas"} />
      <Order orderType={"Salad"} />
      <Order orderType={"Cake"} />
    </div>
  );
};

export default Restaurant;
