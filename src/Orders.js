import React, { Component } from "react";
import RestaurantButton from "./RestaurantButton";

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = { Orders: 0 };
  }
  addOrder = () => {
    this.setState(incrementNewState => {
      return {
        Orders: incrementNewState.Orders + 1
      };
    });
  };

  render() {
    return (
      <li>
        {this.props.orderType}: {this.state.Orders}{" "}
        <RestaurantButton handle={this.addOrder} />
      </li>
    );
  }
}
export default Orders;
