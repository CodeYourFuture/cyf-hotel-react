import React from "react";

const ShowFullListButton = (props) => {
  const displayFullList = () => {
    props.showFullList();
  };

  return <button onClick={displayFullList}>Show Full List</button>;
};

export default ShowFullListButton;
