import React from "react";
import Order from "./Order";
import classes from "./Restaurant.module.css";
import saladImg from "../../images/salad.jpg";
import pizzaImg from "../../images/pizza.jpg";
import cakeImg from "../../images/cake.jpeg";

const Restaurant = () => {
  return (
    <div className={`${classes.resturantSec} my-5 mx-3`}>
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
