import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
import Restaurantsubtract from "./Restaurantsubtract";

const Order = props => {
  const [orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders(orders + 1);
  };
  const subtractOne = () => {
    setOrders(orders === 0 ? orders : orders - 1);
  };
  return (
    <li className="orders">
      <div>
        {props.orderType}: {orders}{" "}
      </div>
      <pre> </pre>
      <RestaurantButton add={orderOne} />
      <Restaurantsubtract subtract={subtractOne} />
    </li>
  );
};
export default Order;
