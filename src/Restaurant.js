import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = (props) => {
  const [orders, setOrders] = useState(0);
  
  function orderOne() {
    setOrders(orders + 1);
  }
  return (
    <li>
      Pizzas: {orders} <RestaurantButton handleClick={orderOne} />
    </li>
  );
}


const Restaurant = () => {
  // const [orders, setOrders] = useState(0);
  // const orderOne = () => {
  //   setOrders(orders + 1);
  // };
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        {/* <li>
          Pizzas: {orders} <RestaurantButton handleClick={orderOne} />
        </li> */}
        <Order />
      </ul>
    </div>
  );
};

export default Restaurant;
