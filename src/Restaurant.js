import Orders from "./Orders";
import React from "react";

const Restaurant = () => {
  // const pizzas = 0;
  return (
    <div className="orderDiv">
      <h3>Restaurant Orders</h3>
      <ul className="orderUl">
        <Orders orderType="Salads" />
        <Orders orderType="Pizza" />
        <Orders orderType="Chocolate cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
