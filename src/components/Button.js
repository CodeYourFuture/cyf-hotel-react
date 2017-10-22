import React from 'react'

const Button = props => (
  <button
    className="btn btn-primary fn-submit-name"
    onClick={props.onClick}
  >
    {props.text}
  </button>
)

export default Button