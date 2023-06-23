import React from "react";
import classes from "./ErrorMessage.module.css"

const ErrorMessage = (props) => {
  return (
    <div className={classes.errorMessage}>
      <span className={classes.errorIcon}>!</span>
      <span className={classes.errorText}>{props.errorMessage}</span>
    </div>
  );
};

export default ErrorMessage;
