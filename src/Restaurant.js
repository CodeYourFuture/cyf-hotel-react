import React from "react";
import { useState } from "react";

const RestaurantButton = props => {
  return (
    <button className="btn btn-primary" onClick={props.order}>
      Add
    </button>
  );
};

const Order = props => {
  const [orders, setOrders] = useState(0);
  function orderOne() {
    setOrders(orders + 1);
  }
  return (
    <li>
      {props.why}: {orders} <RestaurantButton order={orderOne} />
    </li>
  );
};
const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order why="Pizzas" />
        <Order why="Salads" />
        <Order why="Chocolate cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
