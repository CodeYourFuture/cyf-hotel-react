import React, { Component } from "react";
import Orders from "./Orders"

class Restaurant extends Component {


  render() {
        return (
      <div>
        <h3>Restaurant Orders</h3>
        <ul>
          <Orders orderType="Salads" />
          <br/>
          <Orders orderType="Pizzas" />
        </ul>
      </div>

    );
  };

}

export default Restaurant;
