import React from "react";
import Order from "./components/Order";
const Restaurant = () => {
  return (
    <section className="restaurant">
      <h3>Restaurant Orders</h3>
      <ul className="orderContainer">
        <Order orderType="Pizzas" img="pizza.png" />
        <Order orderType="Salads" img="salad.png" />
        <Order orderType="Chocolate cake" img="cake.png" />
      </ul>
    </section>
  );
};

export default Restaurant;
