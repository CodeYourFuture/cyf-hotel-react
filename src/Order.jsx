import React, {useState} from "react";
import RestaurantButton from "./RestaurantButton";

const Order = () => {
const [orders, setOrders] = useState(0);

  const orderOne = (orderType) => {
    setOrders(orders + 1);
  }
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {orders} <RestaurantButton handleClick={orderOne}/>
        </li>
      </ul>
    </div>
  );
};

  export default Order;

