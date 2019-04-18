import React, { Component } from "react";
import Restaurant from "./Restaurant";

class RestaurantButton extends Component {
  // state = {
  //     score: 0
  // }
  render() {
    return (
      <button className="btn btn-primary" onClick={this.props.onClick}>
        Add
      </button>
    );
  }
}

export default RestaurantButton;
