import React from "react";

const Btn = (props) => (
    <td>
    {console.log(props)}
        <button className="btn btn-primary fn-submit-name"
        onClick={props.toggle}>{props.button}</button>
    </td>
);

export default Btn;
