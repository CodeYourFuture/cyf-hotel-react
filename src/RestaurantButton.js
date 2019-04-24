import React, { Component } from "react";
import Button from "./Button";

class RestaurantButton extends Component {
  render() {
    return (
      <ul>
        <li>
          <Button
            onClick={this.props.handleClick}
            content={this.props.content}
          />
        </li>
      </ul>
    );
  }
}
export default RestaurantButton;
