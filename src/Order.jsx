import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = ({ orderType }) => {
  const [orders, setOrders] = useState(0);
  const orderOne = () => {
    setOrders(orders + 1);
  };
  return (
    <div>
      <li>
        Pizzas: {orders}{" "}
        <button className="btn btn-primary" onClick={orderOne}>
          Add
        </button>
      </li>
    </div>
  );
};

export default Order;
