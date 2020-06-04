import React, { useState } from "react";
import RestaurantButton from "./Restaurant/RestaurantButton";
import Order from "./Restaurant/Order";

const Restaurant = () => {
  const [order, setOrder] = useState(0);

  const orderOne = () => {
    setOrder(order + 1);
  };

  return (
    <div className="container">
      <div className="restaurant">
        <h4>Restaurant Orders</h4>
      </div>
      <div className="pizzas">
        <ul>
          <Order order={order} />
          <RestaurantButton onclick={orderOne} />
        </ul>
      </div>
    </div>
  );
};

export default Restaurant;
