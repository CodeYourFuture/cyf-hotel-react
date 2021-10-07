import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

// Render order, called by `Restaurant.js`
const Order = props => {
  // Set state variable `pizza` to 0 then when called by the
  // add pizza button increments the count state variable by 1
  const [quantity, setQuantity] = useState(0);
  const orderOne = () => setQuantity(quantity + 1);

  return (
    <li className="list-group-item m-1">
      {props.orderType}: <div> {quantity}</div>
      <RestaurantButton click={orderOne} />
    </li>
  );
};

export default Order;
