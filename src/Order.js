import React, { useState } from "react"; // imported the useState react hook.
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  const [orders, setOrders] = useState(0); // declared orders variable and passed setOrder function to it.
  //const pizzas= 0; commented Pizzas variables

  const orderOne = () => {
    // added the orderOne function that calls set orders function
    setOrders(orders + 1); //setOrder function gets the order as a parameter and increases with +1;
  };
  return (
    <li>
      {props.orderType} : {orders}
      {/* replaced pizzas variable with orders*/}{" "}
      <RestaurantButton order={orderOne} />
    </li>
  );
};

export default Order;
