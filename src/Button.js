import React from "react";

const Button = (props) => {
    return (
        <button className="btn btn-primary">{props.content}</button>
    )
}

export default Button;