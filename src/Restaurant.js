import React, { useState } from "react";

const Restaurant = () => {
  // const pizzas = 0;
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="Pizza" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate cake" />
      </ul>
    </div>
  );
};

const RestaurantButton = props => {
  return (
    <button className="btn btn-primary" onClick={props.handleClick}>
      Add
    </button>
  );
};

const Order = props => {
  const [orders, setOrders] = useState(0);
  const orderOne = () => {
    setOrders(orders + 1);
  };
  return (
    <div>
      <li>
        {props.orderType}: {orders}
        <RestaurantButton handleClick={orderOne} />
      </li>
    </div>
  );
};

export default Restaurant;
