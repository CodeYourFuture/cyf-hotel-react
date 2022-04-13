import React, { useState } from "react";

const Restaurant = props => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul className="orders">
        <Order orderType={"Pizzas"} />
        <Order orderType={"Salad"} />
        <Order orderType={"Cake"} />
      </ul>
    </div>
  );
};

const Order = ({ orderType }) => {
  const [orders, setOrders] = useState(0);

  function orderOne() {
    return setOrders(currentCount => currentCount + 1);
  }
  return (
    <li className="order">
      {orderType}: {orders} <RestaurantButton handleClick={orderOne} />
    </li>
  );
};

const RestaurantButton = props => {
  return (
    <button onClick={props.handleClick} className="btn btn-primary">
      Add
    </button>
  );
};

export default Restaurant;
