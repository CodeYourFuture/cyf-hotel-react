import React,{useState}from "react";
import RestaurantButton from "./RestaurantButton";

const order = () => {
  const [orders, setOrders] = useState(0);
  function orderOne() {
    setOrders(orders + 1);
  }
  return (
    <li>
          Pizzas: {orders}
          <RestaurantButton handleClick = {orderOne}  /> 
         
        </li>
  );
};

export default order;