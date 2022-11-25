import React, { useState } from "react";

const Order = props => {
  let [order, setOrder] = useState(0);
  const orderOne = () => setOrder(++order);
  return (
    <li>
      {props.type}: {order} <RestaurantButton orderOne={orderOne} />
    </li>
  );
};

const RestaurantButton = props => (
  <button className="btn btn-info btn-add" onClick={props.orderOne}>
    +
  </button>
);

const Restaurant = () => {
  return (
    <div className="orders">
      <h3>Restaurant Orders</h3>
      <ul className="order">
        <Order type="Chocolate Cake" />
        <Order type="Pizzas" />
        <Order type="Salads" />
      </ul>
    </div>
  );
};

export default Restaurant;
