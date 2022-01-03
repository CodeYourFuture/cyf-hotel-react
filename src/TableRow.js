import React from "react";
import TableRowEach from "./TableRowEach.js";

const TableRow = ({ results }) => {
  // const [profileID, setProfileID] = useState(0);

  return results.map((entry, index) => {
    return <TableRowEach entry={entry} key={index} />;
  });
};

export default TableRow;
