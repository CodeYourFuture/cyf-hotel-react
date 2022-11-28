import moment from "moment";
import React from "react";

const ResultRow = ({ record, active, onClick, buttonClicked }) => {
  return (
    <tr onClick={onClick} className={`${active ? "rowColoured" : "rowStart"}`}>
      <td>{record.title}</td>
      <td>{record.firstName}</td>
      <td>{record.surname}</td>
      <td>{record.email}</td>
      <td>{record.roomId}</td>
      <td>{record.checkInDate}</td>
      <td>{record.checkOutDate}</td>
      <td>{moment(record.checkOutDate).diff(record.checkInDate, "days")}</td>
      <td>
        <button onClick={buttonClicked} value={record.id}>
          Show Profile
        </button>
      </td>
    </tr>
  );
};

export default ResultRow;
