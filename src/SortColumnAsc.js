import React, { useState } from "react";

const SortColumnAsc = props => {
  const [col, setCol] = useState([]);
  const [ascending, setAscending] = useState(true);

  const changeSortType = () => {
    setAscending(!ascending);
  };

  // const sortColAsc = col => {};

  // const sortColDesc = col => {};

  return <th>{props.element}</th>;
};

export default SortColumnAsc;
