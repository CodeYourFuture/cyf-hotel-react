import { useState } from "react";
import React from "react";

const RestaurantButton = props => {
  return (
    <button onClick={props.orderOne} className="btn btn-primary">
      Add
    </button>
  );
};

const Order = props => {
  const pizzas = 0;
  const [order, setOrder] = useState(pizzas);

  const orderOne = () => {
    return setOrder(order + 1);
  };
  return (
    <ul>
      <li>
        {props.orderType}: {order} <RestaurantButton orderOne={orderOne} />
      </li>
    </ul>
  );
};

function Restaurant() {
  return (
    <div className="orders">
      <h3>Restaurant Orders</h3>
      <Order orderType="Pizzas 🍕" />
      <Order orderType="Salads 🥗" />
      <Order orderType="Chocolate cake 🎂" />
    </div>
  );
}

export default Restaurant;
