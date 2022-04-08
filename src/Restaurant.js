import React, { useState } from "react";

const Restaurant = () => {
  return (
    <div className="container">
      <h3>Restaurant Orders</h3>
      <ul className="list-group">
        <Order orderType="Pizzas" />
        <Order orderType="Burgers" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate cake" />
      </ul>
    </div>
  );
};

const Order = ({ orderType }) => {
  const [orders, setOrders] = useState(0);
  const orderOne = () => setOrders(orders + 1);
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {orderType}: {orders}{" "}
      <button className="btn btn-primary m-1" onClick={orderOne}>
        Add
      </button>
    </li>
  );
};

export default Restaurant;
