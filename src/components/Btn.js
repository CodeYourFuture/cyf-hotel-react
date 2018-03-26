import React from "react";

const Btn = props => (
  <td>
    <button className="btn btn-primary fn-submit-name" onClick={props.toggle}>
      {props.button}
    </button>
  </td>
);

export default Btn;
