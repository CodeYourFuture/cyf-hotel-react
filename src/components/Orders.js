import React, { Component } from "react";
import RestaurantButton from "./RestaurantButton";

export default class Orders extends Component {
  constructor() {
    super();
    this.state = {
      orders: 0
    };
  }

  addOrder = () =>
    this.setState(preState => {
      return { orders: preState.orders + 1 };
    });

  render() {
    return (
      <li>
        {this.props.orderType}: {this.state.orders}
        <RestaurantButton clickHandler={this.addOrder} />
      </li>
    );
  }
}
