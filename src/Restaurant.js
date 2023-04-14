import React, { useState } from "react";
import Order from "./Order";
import "./Restaurant.css";

const Restaurant = () => {
  const food = ["BLT Sandwich", "Caesar Salad", "Tuna Melt"];
  const [message, setMessage] = useState("");
  //created this state to force Restaurant component to re-render
  const [key, setKey] = useState(0);

  //handling click of Send order button, show message for 6 seconds
  const handleClick = () => {
    setMessage(
      "Your order has been sent! Please wait 10 minutes for your order. Enjoy!"
    );
    setTimeout(() => {
      setMessage("");
    }, 6000);
    setKey(key + 1);
  };

  return (
    <div id="food" className="restaurant">
      <div className="image-back"></div>
      <div className="text-section">
        <h1>Order some food</h1>
        <ul className="food-list">
          {food.map((x, index) => {
            return <Order key={`${index}-${key}`} orderType={x} />;
          })}
        </ul>
        <button className="send-order-button" onClick={handleClick}>
          Send order
        </button>
        {message && <p className="order-message">{message}</p>}
      </div>
    </div>
  );
};

export default Restaurant;
