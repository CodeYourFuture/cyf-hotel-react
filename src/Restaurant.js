import React, { useState } from "react";

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="Pizzas" />
        <Order orderType="Chocolate Cake" />
        <Order orderType="Salads" />
      </ul>
    </div>
  );
};

const Order = ({ orderType }) => {
  const [orders, setOrders] = useState(0);
  const orderOne = () => setOrders(orders + 1);
  return (
    <li>
      {orderType}: {orders} <RestaurantButton orderOne={orderOne} />
    </li>
  );
};

const RestaurantButton = ({ orderOne }) => (
  <button className="btn btn-primary" onClick={orderOne}>
    Add
  </button>
);

export default Restaurant;
