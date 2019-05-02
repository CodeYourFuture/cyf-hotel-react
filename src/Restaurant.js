import React, { Component } from "react";
import Orders from "./Orders";

class Restaurant extends Component {
  render() {
    return (
      <div className="container">
        <div style={restaurantStyle}>
          <h3>Restaurant Orders</h3>
          <ul>
            <Orders orderType="Pizzas" />
            <br />
            <Orders orderType="Salads" />
          </ul>
        </div>
      </div>
    );
  }
}

export default Restaurant;

const restaurantStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "30px"
};
