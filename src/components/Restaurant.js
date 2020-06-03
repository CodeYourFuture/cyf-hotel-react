import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType={"Pizzas"} />
        <Order orderType={"Salads"} />
        <Order orderType={"Chocolate cake"} />
      </ul>
    </div>
  );
};

const Order = ({ orderType }) => {
  const [orders, setOrders] = useState(0);
  const orderOne = () => {
    setOrders(orders + 1);
  };
  return (
    <li>
      {orderType}: {orders}
      <RestaurantButton orderOne={orderOne} />
    </li>
  );
};

export default Restaurant;
