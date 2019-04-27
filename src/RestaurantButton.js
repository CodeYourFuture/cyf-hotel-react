import React, { Component } from "react";
import PropTypes from "prop-types";

import Button from "./Button";

const RestaurantButton = props => {
  return <Button onClick={props.handleClick} content={props.content} />;
};

export default RestaurantButton;

RestaurantButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  content: PropTypes.string
};

RestaurantButton.defaultProps = {
  content: "Test"
};
