import React, {useState} from "react";
import Orders from "./Orders";
const Restaurant = () => {
  const [orders, setOrders] = useState(0);
  const orderOne = () => {
   setOrders(orders + 1)
  }
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Orders orderType="pizza" />
        <Orders orderType="Chicken " />
        <Orders orderType="Hot Chocolate" />
      </ul>
    </div>
  );
};

export default Restaurant;
