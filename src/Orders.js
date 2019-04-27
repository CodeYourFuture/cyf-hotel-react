import React, { Component } from "react";
import PropTypes from "prop-types";
import RestaurantButton from "./RestaurantButton";

class Orders extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pizzas: 0,
      orders: 0
    };
  }

  addOrder = () => {
    console.log("Add order");
    this.setState(prevState => {
      return {
        orders: prevState.orders + 1
      };
    });
  };
  render() {
    return (
      <div>
        {this.props.orderType}= {this.state.orders}
        <RestaurantButton handleClick={this.addOrder} content="Add" />
      </div>
    );
  }
}

export default Orders;

Orders.propTypes = {
  orderType: PropTypes.string.isRequired
};
