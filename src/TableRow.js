import React, { useState } from "react";
import moment from "moment";

const TableRow = props => {
  console.log(props);
  const [selected, setSelected] = useState(false);

  const toggle = () => {
    setSelected(!selected);
  };

  return (
    <tr onClick={toggle} className={selected ? "highlight" : null}>
      <th scope="row">{props.info.id}</th>
      <td>{props.info.title}</td>
      <td>{props.info.firstName}</td>
      <td>{props.info.surname}</td>
      <td>{props.info.email}</td>
      <td>{props.info.roomId}</td>
      <td>{props.info.checkInDate}</td>
      <td>{props.info.checkOutDate}</td>
      <td>
        {moment(props.info.checkOutDate, "YYYY/MM/DD").diff(
          moment(props.info.checkInDate, "YYYY/MM/DD"),
          "days"
        )}
      </td>
    </tr>
  );
};

export default TableRow;
