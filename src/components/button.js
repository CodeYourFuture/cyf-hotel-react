import React from 'react'


const Button = ({handleClick, text}) => (

    <button onClick={handleClick} className="btn btn-primary fn-submit-name">{text}</button>
);
export default Button