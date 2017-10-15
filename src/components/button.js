import React from 'react';

const Button = (props) => {
  return (
    <button onClick = {props.handleClick} className="btn btn-primary fn-submit-name">{props.text}</button>
  )
}
export default Button;
