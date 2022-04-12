import React, { useState } from "react";

const RestaurantButton = props => {
  return (
    <button className="btn btn-primary" onClick={props.orderOne}>
      Add
    </button>
  );
};

const Order = props => {
  const [orders, setOrders] = useState(0);
  function orderOne() {
    setOrders(el => {
      return el + 1;
    });
  }
  return (
    <li className="list-box">
      {props.orderType}: {orders} <RestaurantButton orderOne={orderOne} />{" "}
    </li>
  );
};

const Restaurant = () => {
  return (
    <div className="container">
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
