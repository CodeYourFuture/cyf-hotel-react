import React from "react";
function Button(props) {
  return (
    <button className="btn btn-primary fn-submit-name">
      {props.buttonName}
    </button>
  );
}

// function CustomButton(props) {
//   const texts = {
//     textsName: props.name
//   };
//   return <button name={texts}>{props.buttonName}</button>;
// }
export default Button;
