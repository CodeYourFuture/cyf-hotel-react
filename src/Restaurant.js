import React from "react";
import React {useState} from "react";

const orders = () => {
  const [orders, setOrders] =useState(0);
};
const orderOne = () => {
    setOrders(orders + 1);
  };


const Restaurant = () => {
  const pizzas = 0;
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {pizzas} <button className="btn btn-primary">Add</button>
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
