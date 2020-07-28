import React, { useState } from "react";
import moment from "moment";

const TableRow = ({ item }) => {
  const [hasClick, setHasClick] = useState(false);
  const tableData = [
    item.id,
    item.title,
    item.firstName,
    item.surname,
    item.email,
    item.roomId,
    item.checkInDate,
    item.checkOutDate,
    moment(item.checkOutDate).diff(item.checkInDate, "days")
  ];
  return (
    <tr
      id="table-row"
      className={hasClick ? "tr-selected" : null}
      onClick={() => {
        setHasClick(!hasClick);
      }}
    >
      <th scope="row" />
      {tableData.map(item => {
        return <td>{item}</td>;
      })}
    </tr>
  );
};

export default TableRow;
