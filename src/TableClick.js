import React from "react";

const TableClick = props => {
  return (
    <tr
      className={props.isUserClick ? "clicked-row" : "unclicked-row"}
      onClick={() => props.setUserClick(props.result.id)}
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
        {props.calculateDuration(
          props.result.checkOutDate,
          props.result.checkInDate
        )}
      </td>
    </tr>
  );
};

export default TableClick;
