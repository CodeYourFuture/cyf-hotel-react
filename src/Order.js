import React, {useState} from "react";
import RestaurantButton from "./RestaurantButton";

const Order = () => {
  const [orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders(orders + 1);
  };

  return (
    <ul>
        <li>
          Pizzas: {orders} <RestaurantButton handleClick={orderOne} />
        </li>
      </ul>
  );
};

export default Order