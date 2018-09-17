import React from 'react'
const Button = ({btn_label, searchHandler}) => (
    <button onClick= {searchHandler} className="btn btn-primary fn-submit-name">{btn_label}</button>
);
export default Button