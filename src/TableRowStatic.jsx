import React, { useState } from "react";
const TableRowStatic = () => {
  const [highLightedState, setHighLightedState] = useState(false);
  const toggleHighLight = () => {
    setHighLightedState(!highLightedState);
  };
  return (
    <tr
      key="locked-table-row"
      className={highLightedState ? "high-lighted" : ""}
      onClick={toggleHighLight}
    >
      <th key="locked-table-row-th1">ID:</th>
      <th key="locked-table-row-th2">Title:</th>
      <th key="locked-table-row-th3">First Name:</th>
      <th key="locked-table-row-th4">Surname:</th>
      <th key="locked-table-row-th5">Email:</th>
      <th key="locked-table-row-th6">Room ID:</th>
      <th key="locked-table-row-th7">Check In Date:</th>
      <th key="locked-table-row-th8">Check Out Date:</th>
      <th key="locked-table-row-th9">Time Staying:</th>
    </tr>
  );
};
export default TableRowStatic;
