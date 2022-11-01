import React from "react";
import Orders from "./Orders";

const Restaurant = () => {
  return (
    <div className="wrap-order">
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          <img src="food/pizza.png" width={100} height={100} />
          <Orders orderType={"Pizzas"} />
        </li>
        <li>
          <img src="food/salad.png" width={100} height={100} />
          <Orders orderType={"Salads"} />
        </li>
        <li>
          <img src="food/black-forest.png" width={100} height={100} />
          <Orders orderType={"Chocolate cake"} />
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
