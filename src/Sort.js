import React, { useEffect } from "react";

function Sort(props) {
  const sortHandler = e => {
    e.preventDefault();
    props.handler();
  };
  return (
    <div>
      <button onClick={sortHandler}>Sort</button>
    </div>
  );
}

export default Sort;
