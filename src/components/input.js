import React from 'react';

const Input = (props) => {
  return (
    <input
      id={props.id}
      type="text"
      className="form-control"
      placeholder={props.placeholder}
      name={props.name}
    />
  )
}
export default Input;
