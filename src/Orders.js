import React, { Component } from "react";
import RestaurantButton from "./RestaurantButton";

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = { orders: 0 };
  }

  // addOrder = () => {
  // const previousCount = this.state.orders;
  // this.setState({ orders: previousCount + 1 });
  //   this.setState(previousState => {
  //     return {
  //       orders: previousState.count + 1
  //     };
  //   });
  // };

  addOrder = () => {
    this.setState(previousState => {
      return {
        orders: previousState.orders + 1
      };
    });
  };

  removeOrder = () => {
    const previousCount = this.state.orders;
    if (previousCount) {
      this.setState(previousState => {
        return {
          orders: previousState.orders - 1
        };
      });
    } else {
      alert("please enter at least one order");
    }
  };

  resetOrder = () => {
    this.setState({ orders: 0 });
  };

  render() {
    return (
      <li>
        {this.props.orderType} :{" "}
        <RestaurantButton handleClick={this.removeOrder} content="&#x2212;" />
        {this.state.orders}
        <RestaurantButton handleClick={this.addOrder} content="&#x2b;" />
        <RestaurantButton handleClick={this.resetOrder} content="Reset" />
      </li>
    );
  }
}

export default Orders;
