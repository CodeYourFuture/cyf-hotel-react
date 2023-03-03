import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = ({ orderType }) => {
  const [orders, setOrders] = useState(0);

  const ClickHandler = () => {
    setOrders(orders + 1);
  };
  const removeItem = () => {
    if (orders > 0) {
      setOrders(prev => prev - 1);
    }
  };

  return (
    <div className="Order-container">
      <li>
        {orderType}: {orders}
        <RestaurantButton orderOne={ClickHandler} />
      </li>
      <button className="btn btn-primary" onClick={removeItem}>
        Remove
      </button>
    </div>
  );
};

export default Order;
