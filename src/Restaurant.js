import React, { Fragment, useState } from "react";
import "./App.css";

const RestaurantButton = ({ addOrder }) => (
  <button onClick={addOrder} className="btn btn-primary">
    Add
  </button>
);

const Restaurant = () => {
  const [orders, setOrders] = useState(0);
  // const pizzas = 0;
  const orderOne = () => {
    setOrders(orders + 1);
  };
  return (
    <Fragment>
      <div className="App-content">
        <h3>Restaurant Orders</h3>
        <ul>
          <li>Pizzas: {orders}</li>
          <RestaurantButton addOrder={orderOne} />
        </ul>
      </div>
    </Fragment>
  );
};

export default Restaurant;
