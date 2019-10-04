import React from "react";
import Order from "./Order";

class Restaurant extends React.Component {
  render() {
    // const pizzas = 0;

    return (
      <div className="restaurant-section">
        <h3>Restaurant Orders</h3>
        <ul>
          <Order orderType={"Pizzas"} />
          <Order orderType={"Salads"} />
        </ul>
      </div>
    );
  }
}

export default Restaurant;
