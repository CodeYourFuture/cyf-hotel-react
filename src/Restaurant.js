import React, { useState } from "react";

const Restaurant = props => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul className="list-group">
        <Order orderType={"Pizzas"} />
        <Order orderType={"Salad"} />
        <Order orderType={"Chocolate cake"} />
      </ul>
    </div>
  );
};

const Order = ({ orderType }) => {
  const [orders, setOrders] = useState(0);
  function orderOne() {
    setOrders(currentCount => currentCount + 1);
  }
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {/* {props.orderType}: {orders}{" "} */}
      {orderType}:{orders}
      <RestaurantButton handleClick={orderOne} />
    </li>
  );
};

const RestaurantButton = props => {
  return (
    <button onClick={props.handleClick} className="btn btn-primary m-1">
      Add
    </button>
  );
};

export default Restaurant;
