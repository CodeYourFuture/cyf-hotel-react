import React from "react";
import Order from "./Order";

const Restaurant = () => {
  // const pizzas = 0;
  return (
    <div>
      <h3>Restaurant Orders</h3>

      {/* <li>
          Pizzas: {pizzas} <button className="btn btn-primary">Add</button>
        </li> */}
      <ul className="orders">
        <Order order={Order} orderType={"Pizzas"} />
        <Order orderType={"Salads"} />
        <Order orderType={"Chocolate cake"} />
      </ul>
    </div>
  );
};

export default Restaurant;
