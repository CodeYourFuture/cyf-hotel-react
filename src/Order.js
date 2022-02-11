import React from "react";
import { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = ({ orderType }) => {
  const [orders, setOrders] = useState(0);
  //const pizzas = 0;

  /*const orderOne = () => {
    const addOne = orders + 1;
    setOrders(addOne);
  };*/

  const orderOne = () => {
    setOrders(prev => prev + 1);
  };

  return (
    <div>
      <li className="inline-flex">
        {orderType}: {orders}{" "}
        <RestaurantButton orderOne={orderOne} text={orderType} />
      </li>
    </div>
  );
};

export default Order;
