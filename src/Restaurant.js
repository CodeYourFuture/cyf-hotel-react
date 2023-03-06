import React, { useState } from "react";
import Order from "./Order";
import "./Restaurant.css";

const Restaurant = () => {
  const [orders, setOrders] = useState(0);
  const food = ["BLT Sandwich", "Caesar Salad", "Tuna Melt"];

  const handleClick = () => {
    setOrders(0);
  };

  return (
    <div className="restaurant">
      <h1>Order some food</h1>
      <ul className="food-list">
        {food.map((x, index) => {
          return (
            <Order
              key={index}
              orderType={x}
              orders={orders}
              setOrders={setOrders}
            />
          );
        })}
      </ul>
      <button onClick={handleClick}>Send order</button>
    </div>
  );
};

export default Restaurant;
