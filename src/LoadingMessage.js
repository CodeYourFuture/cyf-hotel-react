import React from "react";

const LoadingMessage = (props) => {
  console.log(props.state);
  return props.state === false ? (
    <p className="loading-data-p">Loading data...</p>
  ) : (
    ""
  );
};

export default LoadingMessage;
