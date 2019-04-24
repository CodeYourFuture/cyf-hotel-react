import React, { Component } from "react";
import RestaurantButton from "./RestaurantButton";

class Restaurant extends Component {
  addOrder = () => {
    console.log("Add order");
  };
  render() {
    const pizzas = 0;
    return (
      <div>
        <ul>
          <li>
            Pizzas= {pizzas}
            <RestaurantButton handleClick={this.onClick} content="Add" />
          </li>
        </ul>
      </div>
    );
  }
}
export default Restaurant;
