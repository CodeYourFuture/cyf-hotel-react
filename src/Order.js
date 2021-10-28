import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = ({ orderType, img }) => {
  let [orders, setOrders] = useState(0);
  const orderOne = () => {
    setOrders(orders + 1);
  };
  const minusOne = () => {
    setOrders(orders - 1);
  };
  return (
    <li className="order">
      <img src={img} alt="food-icon" id="food-icon" />
      <p>
        {orderType}: {orders}
      </p>
      <div class="btn-group" role="group" aria-label="food-icons">
        <RestaurantButton
          orderOne={orderOne}
          minusOne={minusOne}
          className="restaurant-btn"
        />
      </div>
    </li>
  );
};

export default Order;
