import React, { Fragment, useState } from "react";
import "./App.css";

const RestaurantButton = ({ addOrder }) => (
  <button onClick={addOrder} className="btn btn-primary">
    Add
  </button>
);
const Orders = () => {
  const [orders, setOrders] = useState(0);
  // const pizzas = 0;
  const orderOne = () => {
    setOrders(orders + 1);
  };
  return <li>Pizzas: {orders}</li>;
};

const Restaurant = () => {
  return (
    <Fragment>
      <div className="App-content">
        <h3>Restaurant Orders</h3>
        <ul>
          <Orders />
          <RestaurantButton addOrder={orderOne} />
        </ul>
      </div>
    </Fragment>
  );
};

export default Restaurant;
