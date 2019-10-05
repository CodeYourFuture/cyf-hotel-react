import React from "react";
import Order from "./components/Order";

class Restaurant extends React.Component {
  render() {
    return (
      <div>
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
