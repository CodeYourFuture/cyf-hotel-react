import React from "react";
import OrderPizza from "./OrderPizza";
import OrderSalad from "./OrderSalad";
import OrderChocolatCake from "./OrderChocolatCake";

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <OrderPizza />
        <OrderSalad />
        <OrderChocolatCake />
      </ul>
    </div>
  );
};

export default Restaurant;
