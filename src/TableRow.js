import React, { useState } from "react";
import moment from "moment";

const TableRow = ({ result }) => {
  const [rowSelect, setRowSelect] = useState(false);

  const changeBackground = () => {
    setRowSelect(!rowSelect);
  };

  return (
    <tr
      className={rowSelect === true ? "btn-false" : ""}
      onClick={changeBackground}
    >
      <th scope="row">{result.id}</th>
      <td>{result.title}</td>
      <td>{result.firstName}</td>
      <td>{result.surname}</td>
      <td>{result.email}</td>
      <td>{result.roomId}</td>
      <td>{result.checkInDate}</td>
      <td>{result.checkOutDate}</td>
      <td>{moment(result.checkOutDate).diff(result.checkInDate, "days")}</td>
    </tr>
  );
};
export default TableRow;
