import React from 'react';
const Button = props => (
    <button 
        className={props.classStyle}
        onClick={props.onClick}> {props.searchById} </button>
);

export default Button;

// {...props}