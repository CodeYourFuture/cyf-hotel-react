import React, { Fragment, useState } from "react";
import "./App.css";

const RestaurantButton = ({ addOrder }) => (
  <button onClick={addOrder} className="btn btn-primary">
    Add
  </button>
);
const Order = ({ orderType }) => {
  const [orders, setOrders] = useState(0);
  const orderOne = () => {
    setOrders(orders + 1);
  };
  return (
    <Fragment>
      <li>
        {orderType}: {orders}
      </li>
      <RestaurantButton addOrder={orderOne} />
    </Fragment>
  );
};

const Restaurant = () => {
  return (
    <Fragment>
      <div className="App-content">
        <h3>Restaurant Orders</h3>
        <ul>
          <Order orderType="Pizzas" />
          <Order orderType="Salads" />
          <Order orderType="Chocolate Cakes" />
        </ul>
      </div>
    </Fragment>
  );
};

export default Restaurant;
