import React, { Component } from "react";
import RestaurantButton from "../RestaurantButton/RestaurantButton";

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: 0
    };
  }
  addOrder = () => {
    this.setState(previousState => {
      return {
        orders: previousState.orders + 1
      };
    });
  };

  render() {
    return (
      <div>
        <li>
          {this.props.orderType}: {this.state.orders}
        </li>
        <RestaurantButton order={this.addOrder} />
      </div>
    );
  }
}

export default Orders;
