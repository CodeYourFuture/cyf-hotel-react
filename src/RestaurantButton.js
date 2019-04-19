import React from "react";
import Button from './Button'

const RestaurantButton = (props) =>
    <Button handleClick={props.handleClick} content={props.content} />;

export default RestaurantButton;