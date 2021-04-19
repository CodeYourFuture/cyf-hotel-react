import React, { useState } from "react";
import "./App.css";

const RestaurantButton = ({ addOrder }) => (
  <button onClick={addOrder} className="btn btn-primary">
    Add
  </button>
);
const Order = ({ orderType }) => {
  const [orders, setOrders] = useState(0);
  const orderOne = () => {
    setOrders(orders + 1);
  };
  return (
    <div className="d-inline-flex justify-content-center">
      <RestaurantButton addOrder={orderOne} />
      <li>
        {orderType}: {orders}
      </li>
    </div>
  );
};

const Restaurant = () => {
  return (
    <div className="App-content">
      <div className="container">
        <h3>Restaurant Orders</h3>
        <ul>
          <Order orderType="Pizzas" />
          <Order orderType="Salads" />
          <Order orderType="Chocolate Cakes" />
        </ul>
      </div>
    </div>
  );
};

export default Restaurant;
