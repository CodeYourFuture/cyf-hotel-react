import React, { useState } from "react";

const Order = ({ orderType }) => {
  const [orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders(orders + 1);
  };

  return (
    <li>
      {orderType}: {orders} <RestaurantButton onClick={orderOne} />
    </li>
  );
};

const RestaurantButton = ({ onClick }) => {
  return (
    <button className="btn btn-primary" onClick={onClick}>
      Add
    </button>
  );
};

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

export default Restaurant;