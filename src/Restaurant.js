import React from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <section className="restaurant-order">
      <h3>Restaurant Orders</h3>
      <ul className="restaurant-container">
        <Order orderType="Pizza" img={require("./images/pizza.png")} />
        <Order orderType="Salad" img={require("./images/salad.png")} />
        <Order
          orderType="Chocolate Cake"
          img={require("./images/chocolate-cake.png")}
        />
      </ul>
    </section>
  );
};

export default Restaurant;
