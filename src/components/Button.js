import React from "react";

const ButtonSearch = props => {
  return (
    <button onClick={props.search} className="btn btn-primary fn-submit-name">
      {props.buttonText}
    </button>
  );
};
export default ButtonSearch;
