import React from "react";
import "./App.css";

function CustomerProfile() {
  function handleClick(props) {
    return <p>{props.id}</p>;
  }
  return (
    <button onClick={handleClick} className="profileButton">
      Show profile
    </button>
  );
}

export default CustomerProfile;
