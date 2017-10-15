import React from 'react';

const Button = props =>
<button  onClick={props.onClick} className="btn btn-primary fn-submit-name">{props.button}</button>


export default Button;