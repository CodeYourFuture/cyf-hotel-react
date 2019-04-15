import React, { Component } from "react";
import Orders from './components/Orders'
export default class Restaurant extends Component {

  render() {
    return (
      <div>
        <h3>Restaurant Orders</h3>
        <ul>
          <Orders orderType="Pizzas" />
          <Orders orderType="Salads" />
        </ul>
      </div>
    );
  }
}
