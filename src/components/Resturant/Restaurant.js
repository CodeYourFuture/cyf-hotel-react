import React from "react";
import Order from "./Order";
import classes from "./Restaurant.module.css";
import saladImg from "../../assets/salad.jpg";
import pizzaImg from "../../assets/pizza.jpg";
import cakeImg from "../../assets/cake.jpeg";

const Restaurant = () => {
  return (
    <div className={`${classes["resturant_sec"]} my-5 mx-3`}>
      <h3 className="text-center mb-3">Restaurant Orders</h3>
      <ul>
        <Order orderType="Pizzas" src={pizzaImg} />
        <Order orderType="Salads" src={saladImg} />
        <Order orderType="Chocolate cake" src={cakeImg} />
      </ul>
    </div>
  );
};

export default Restaurant;
