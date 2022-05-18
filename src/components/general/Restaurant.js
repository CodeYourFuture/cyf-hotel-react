import React, { useState } from "react";
import "../../css/restaurant.css";
const Restaurant = props => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType={"Pizza"} />
        <Order orderType={"Salad"} />
        <Order orderType={"Cake"} />
      </ul>
    </div>
  );
};

const Order = ({ orderType }) => {
  const [orders, setOrders] = useState(0);
  const orderOne = () => {
    setOrders(currentCount => currentCount + 1);
  };
  return (
    <li>
      {orderType}: {orders}
      <RestaurantButton handleClick={orderOne} />
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
