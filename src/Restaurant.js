import React, { Fragment } from "react";
import Order from "./Order";
import "./Restaurant.css";

const Restaurant = () => {
  return (
    <Fragment>
      <div className="orders-container">
        <h3>Restaurant Orders</h3>
        <ul className="order-list">
          <Order ordertype="Pizzas" />
          <Order ordertype="Salads" />
          <Order ordertype="Chocolate cake" />
        </ul>
      </div>
    </Fragment>
  );
};

export default Restaurant;
