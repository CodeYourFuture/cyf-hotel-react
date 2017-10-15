
import React from "react";

// const MyButton = props => <button className="btn btn-primary fn-submit-name">Search IDs</button>
// const MyButton = props => <button className="btn btn-primary fn-submit-name">{props.text}</button>


const MyButton = function (props) {
  return <button className={props.cssClasses}>{props.text}</button>
}
export default MyButton;