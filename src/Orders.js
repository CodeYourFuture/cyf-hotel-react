import React, { Component } from 'react';
import RestaurantButton from './RestaurantButton';

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: 0
    };
  }

  addOrder = () => {
    this.setState(previousState => {
      return {
        order: previousState.order + 1
      };
    });
  };

  render() {
    return (
      <ul>
        <li>
          {this.props.orderType}: {this.state.order}
          <RestaurantButton handleClick={this.addOrder} />
        </li>
      </ul>
    );
  }
}

export default Orders;
