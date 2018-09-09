import React from 'react'
const Button = ({label, search}) => (
    <button onClick= {search} className="btn btn-primary fn-submit-name">{label}</button>
);
export default Button