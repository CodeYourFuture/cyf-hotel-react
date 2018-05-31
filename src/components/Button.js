import React, { Component } from "react";

const Button = props => {
  return (
    <button
      onClick={props.getBookingsById}
      className="btn btn-primary fn-submit-name"
    >
      {props.name}
    </button>
  );
};

export default Button;
