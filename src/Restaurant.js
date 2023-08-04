import React from "react";
import { useState } from "react";

function RestaurantButton (props) {
  return <button className="btn btn-primary" onClick={props.onclick}>Add</button>
}

const Order = (props) => {
  let [order, setOrders] = useState(0);
  function orderOne() {
    setOrders(order + 1);
  }
  return (
    <li>
      {props.orderType}: {order} <RestaurantButton onclick={orderOne} />
    </li>
  );
}

const Restaurant = () => {
  
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="Pizzas" />
        <Order orderType="Salad" />
        <Order orderType="Chocolate cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
