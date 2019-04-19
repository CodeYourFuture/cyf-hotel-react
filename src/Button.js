import React from "react";

const Button = (props) =>
    <button onClick={props.handleClick} className="btn btn-primary">{props.content}</button>;

export default Button;