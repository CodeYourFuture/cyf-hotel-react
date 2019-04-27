import React, { Component } from "react";
import RestaurantButton from "./RestaurantButton";

class Orders extends Component {
  constructor(props) {
    super(props)
    this.state = {
      portion: props.portion
    }
  }

  addOrder = () => {
    console.log("add an order")
    this.setState(previousState => {
      return {
        portion: previousState.portion + 1
      }
    })
  }

  render(){
    return (
        <li>
        {this.props.orderType}: {this.state.portion}
          <RestaurantButton order={this.addOrder} />
        </li>
    )
  }
}

export default Orders;