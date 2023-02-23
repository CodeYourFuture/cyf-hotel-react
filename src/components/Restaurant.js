import React from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div className="restaurant-order">
      <h4>Restaurant Orders</h4>
      <section className="order-container">
        <p>
          <Order orderType="Pizzas" />
        </p>
        <p>
          <Order orderType="Salads" />
        </p>
        <p>
          <Order orderType="Chocolate cake" />
        </p>
      </section>
    </div>
  );
};

export default Restaurant;
