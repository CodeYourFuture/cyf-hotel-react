import React from "react";

const ShowFullListButton = (props) => {
  const displayFullList = () => {
    console.log("hello!");
    props.showFullList();
  };

  return <button onClick={displayFullList}>Show Full List</button>;
};

export default ShowFullListButton;
