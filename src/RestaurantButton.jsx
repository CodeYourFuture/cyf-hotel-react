import React, { Component } from "react";

class RestaurantButton extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <button className="btn btn-primary" onClick={this.props.orderOne}>
        Add
      </button>
    );
  }
}

export default RestaurantButton;
