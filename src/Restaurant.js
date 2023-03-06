import React, { useState } from "react";
import Order from "./Order";
import "./Restaurant.css";

const Restaurant = () => {
  const food = ["BLT Sandwich", "Caesar Salad", "Tuna Melt"];
  const [message, setMessage] = useState("");
  //created this state to force Restaurant component to re-render
  const [key, setKey] = useState(0);

  const handleClick = () => {
    setMessage("Order sent! Please wait 10 minutes for your order. Enjoy!");
    setTimeout(() => {
      setMessage("");
    }, 5000);
    setKey(key + 1);
  };

  return (
    <div className="restaurant">
      <h1>Order some food</h1>
      <ul className="food-list">
        {food.map((x, index) => {
          return <Order key={`${index}-${key}`} orderType={x} />;
        })}
      </ul>
      <button onClick={handleClick}>Send order</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Restaurant;
