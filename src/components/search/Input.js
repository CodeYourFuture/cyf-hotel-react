import React from "react";

const Input = ({ getInput, placeholder }) => (
    <td>
        <input
            className="form-control"
            placeholder={placeholder}
            onChange={getInput}
        />
    </td>
);

export default Input;