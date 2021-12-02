import React, { useState } from "react";
import moment from "moment";

const TableRow = ({ person, index, clickEvent }) => {
  const [highlighted, setHighlighted] = useState(false);

  const highlightRow = () => setHighlighted(!highlighted);

  return (
    <tr
      style={highlighted ? { background: "#e4e4e4" } : {}}
      onClick={() => highlightRow(index++)}
      id={(index += 1)}
    >
      <td>{index}</td>
      <td>{person.firstName}</td>
      <td>{person.surname}</td>
      <td>{person.title}</td>
      <td>{person.email}</td>
      <td>{person.roomId}</td>
      <td>{person.checkInDate}</td>
      <td>{person.checkOutDate}</td>
      <td>{moment(person.checkOutDate).diff(person.checkInDate, "days")}</td>
      <td>
        <button className="btn-primary" onClick={() => clickEvent(index)}>
          View Profile
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
