import React, { Component } from "react";
import RestaurantButton from "./RestaurantButton";
import Orders from "./Orders";

class Restaurant extends Component {
  render() {
    return (
      <div>
        <h3>Restaurant Orders</h3>

        <ul>
          <Orders orderType="Pizza" />
          <Orders orderType="Salad" />
        </ul>
      </div>
    );
  }
}

export default Restaurant;
