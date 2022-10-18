import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = ({ orderType, imgSrc, randomPrice }) => {
  const [orders, setorders] = useState(0);

  const orderOne = () => {
    console.log("click");
    setorders(orders + 1);
  };

  return (
    <div className="order-list">
      <li className="list-item ">
        {orderType}: {orders} <RestaurantButton handleOrderONe={orderOne} />{" "}
        <p>Price : {randomPrice}</p>
        <p>Total Price : {randomPrice * orders}</p>
      </li>
      <img src={imgSrc} alt="food-image" className="order-img" />
    </div>
  );
};

export default Order;
