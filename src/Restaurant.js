import React, { Component } from "react";
import Orders from './Orders'

class Restaurant extends Component {
  render() {
    return (
      <div class='container'>
        <h3>Restaurant Orders</h3>
        <ul>
          <Orders orderType='Pizzas' />
          <br />
          <Orders orderType='Salads' />
        </ul>
      </div>
    );
  };
}

export default Restaurant;
