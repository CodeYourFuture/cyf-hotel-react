import React from "react";
const TableRowStatic = () => {
  // const [highLightedRows, setHighLightedRows] = useState([]);
  return (
    <tr
      key="locked-table-row"
      // commented to prevent static row highlighting
      // id="locked-table-row"
      // className={
      //   highLightedRows.includes("locked-table-row") ? "high-lighted" : ""
      // }
      // onClick={() => setHighLightedRows((oldArr) => {
      //   const index = oldArr.findIndex(x => x === "locked-table-row");
      //   return index === -1 ? [...oldArr, "locked-table-row"] : oldArr.filter(x => x !== "locked-table-row");
      // })}
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
