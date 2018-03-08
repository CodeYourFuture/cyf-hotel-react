import React from "react";

const button = ({ value, onClick }) => (
    <td>
        <button className="btn btn-primary fn-submit-name" onClick={onClick}>{value}</button>
    </td>
);

export default button;