import React, { useState } from "react";

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="Pizzas" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate Cake" />
      </ul>
    </div>
  );
};

const Order = props => {
  const [orders, setOrders] = useState(0);

  const orderOne = props => {
    setOrders(orders + 1);
  };
  return (
    <li>
      {props.orderType}: {orders} <RestaurantButton orderOne={orderOne} />
    </li>
  );
};
const RestaurantButton = props => {
  return (
    <button className="btn btn-primary" onClick={props.orderOne}>
      Add
    </button>
  );
};

export default Restaurant;
