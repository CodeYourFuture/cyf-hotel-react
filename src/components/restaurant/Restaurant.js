import React from "react";
import Order from "./Order";
import "./order.css";

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul className="orderUl">
        <Order orderType={"Pizzas"} />
        <Order orderType={"Salads"} />
        <Order orderType={"Chocolate cake"} />
      </ul>
    </div>
  );
};

export default Restaurant;
