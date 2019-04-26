import React, { Component } from "react";

class RestaurantButton extends Component {
  render() {
    return (
      <button onClick={this.props.handle} className="btn btn-primary">
        Add
      </button>
    );
  }
}

export default RestaurantButton;
