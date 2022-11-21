import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
import Order from "./Order";
import { PropTypes } from "prop-types";

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>

      <ul>
        {/* <li>  */}

        <Order orderType="Pizzas" buttonText="Add Pizza" />
        <Order orderType="Salads" buttonText="Add Salad" />
        <Order orderType="Chocolate cake" buttonText="Add Cake" />
        {/* <button className="btn btn-primary">Add</button>  */}
        {/* <button onClick={orderOne}>Click</button>
        </li> */}
      </ul>
    </div>
  );
};

export default Restaurant;
