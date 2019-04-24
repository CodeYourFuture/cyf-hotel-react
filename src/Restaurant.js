import React, { Component } from "react";

import Orders from './Orders'

class Restaurant extends Component {


  render() {
    const pizzas = 0;
    return (
      <div className="restaurantSection">
        <h3>Restaurant Orders</h3>
        <ul>
          <Orders orderType="Pizza" />
          <Orders orderType="Salad" />
          <Orders orderType="Lasagna" />
        </ul>
      </div>
    );
  }
};

export default Restaurant;
