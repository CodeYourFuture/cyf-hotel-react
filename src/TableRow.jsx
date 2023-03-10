import { useState } from "react";
import moment from "moment";

const TableRow = props => {
  const [highlight, setHighlight] = useState("white");

  const selected = () => {
    setHighlight(highlight === "white" ? "gray" : "white");
  };

  return (
    <tr onClick={selected} className={highlight}>
      <td>{props.id}</td>
      <td>{props.title}</td>
      <td>{props.firstName}</td>
      <td>{props.surname}</td>
      <td>{props.email}</td>
      <td>{props.roomId}</td>
      <td>{props.checkInDate}</td>
      <td>{props.checkOutDate}</td>
      <td>
        {moment(props.checkOutDate).diff(moment(props.checkInDate), "days")}
      </td>
    </tr>
  );
};

export default TableRow;
