import React, { useState } from "react";

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="Pizzas" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate cake" />
      </ul>
    </div>
  );
};

const Order = ({ orderType }) => {
  let [orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders(orders + 1);
  };

  return (
    <li>
      {orderType}: {orders} <RestaurantButton action={orderOne} />
    </li>
  );
};

const RestaurantButton = ({ action }) => {
  return (
    <button className="btn btn-primary" onClick={action}>
      Add
    </button>
  );
};

export default Restaurant;
