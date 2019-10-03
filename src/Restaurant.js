import React from "react";
import RestaurantButton from "./components/RestaurantButton";

class Restaurant extends React.Component {
  addOrder = () => {
    console.log("Thanks, your order has been placed!");
  };
  render() {
    const pizzas = 0;
    return (
      <div>
        <h3>Restaurant Orders</h3>
        <ul>
          <li>
            Pizzas: {pizzas} <RestaurantButton eventOnClick={this.addOrder} />
          </li>
        </ul>
      </div>
    );
  }
}
export default Restaurant;
