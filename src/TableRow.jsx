import { useState } from "react";
import moment from "moment";

const Row = props => {
  const [highlight, setHighlight] = useState("white");

  const selected = () => {
    setHighlight(highlight === "white" ? "gray" : "white");
  };

  return (
    <tr key={props.data.id} onClick={selected} className={highlight}>
      <td>{props.data.id}</td>
      <td>{props.data.title}</td>
      <td>{props.data.firstName}</td>
      <td>{props.data.surname}</td>
      <td>{props.data.email}</td>
      <td>{props.data.roomId}</td>
      <td>{props.data.checkInDate}</td>
      <td>{props.data.checkOutDate}</td>
      <td>
        {moment(props.data.checkOutDate).diff(
          moment(props.data.checkInDate),
          "days"
        )}
      </td>
    </tr>
  );
};

export default Row;
