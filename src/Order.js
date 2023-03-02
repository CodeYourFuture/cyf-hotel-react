import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = ({ orderType }) => {
  const [orders, setOrders] = useState(0);

  const ClickHandeler = () => {
    setOrders(orders + 1);
  };
  const removeItem = () => {
    setOrders(prev => prev - 1);
  };

  return (
    <div className="Order-container">
      <li>
        {orderType}: {orders}
        <RestaurantButton orderOne={ClickHandeler} />
      </li>
      <button className="btn btn-primary" onClick={removeItem}>
        Remove
      </button>
    </div>
  );
};

export default Order;
