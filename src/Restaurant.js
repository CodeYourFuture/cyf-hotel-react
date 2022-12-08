import React from "react";
import Order from "./component/Order";

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="Pizzas" />
        <Order orderType="Salads" />
        <Order orderType="Tea" />
      </ul>
    </div>
  );
};

export default Restaurant;
