import React, { Component } from "react";
import RestaurantButton from "./RestaurantButton";
import Orders from "./Orders";

class Restaurant extends Component {
  render() {
    const pizzas = 0;

    return (
      <div>
        <h3>Restaurant Orders</h3>

        <Orders orderType="Pizza" />

        <Orders orderType="Salad" />
      </div>
    );
  }
}

export default Restaurant;
