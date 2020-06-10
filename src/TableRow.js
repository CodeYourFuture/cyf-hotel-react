import React, { useState } from "react";
import moment from "moment";

const TableRow = props => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  const handleClick = () => {
    setIsHighlighted(!isHighlighted);
  };

  return (
    <tr
      onClick={handleClick}
      style={{ backgroundColor: isHighlighted ? "yellow" : "" }}
    >
      <td>{props.result.id}</td>
      <td>{props.result.title}</td>
      <td>{props.result.firstName}</td>
      <td>{props.result.surname}</td>
      <td>{props.result.email}</td>
      <td>{props.result.roomId}</td>
      <td>{props.result.checkInDate}</td>
      <td>{props.result.checkOutDate}</td>
      <td>
        {moment(props.result.checkOutDate).diff(
          moment(props.result.checkInDate),
          "days"
        )}
      </td>
    </tr>
  );
};

export default TableRow;
