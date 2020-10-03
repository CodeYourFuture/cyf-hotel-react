import React from "react";
import { useState } from "react";

function RestaurantButton(props) {
  return (
    <button onClick={props.newOrder} className="btn btn-primary">
      Add
    </button>
  );
}

function Order(props) {
  let [orders, setOrders] = useState(0);
  let orderOne = () => setOrders(++orders);

  return (
    <li>
      {props.orderType}: {orders} <RestaurantButton newOrder={orderOne} />
    </li>
  );
}

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="Pizzas" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate cakes" />
      </ul>
    </div>
  );
};

export default Restaurant;
