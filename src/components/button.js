import React from 'react';

const Button = (props) => {
  return (
    <button onClick = {props.search} disabled={props.isdisabled} className="btn btn-primary fn-submit-name">{props.text}</button>
  )
}
export default Button;
