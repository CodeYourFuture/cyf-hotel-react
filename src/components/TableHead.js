import React, { useState } from "react";

const TableHead = ({ content }) => {
  const [sortAscendingDescending, setSortAscendingDescending] = useState(false);

  const handleSort = () => {
    setSortAscendingDescending(!sortAscendingDescending);
    console.log(sortAscendingDescending);
  };

  return (
    <th scope="col" onClick={handleSort}>
      {content}
    </th>
  );
};

export default TableHead;
