import React from "react";

const Row = props => {
  return (
    <tbody className="table-body table-striped lg-col-11 col-11">
      <tr
        onClick={() => props.setSelectedRow(props.row.id)}
        className={props.isSelected ? "selected-row" : "unselected-row"}
      >
        <td>{props.row.id}</td>
        <td>{props.row.title}</td>
        <td>{props.row.firstName}</td>
        <td>{props.row.surname}</td>
        <td>{props.row.email}</td>
        <td>{props.row.roomId}</td>
        <td>{props.row.checkInDate}</td>
        <td>{props.row.checkOutDate}</td>
        <td>{props.row1}</td>
        <td>
          <button
            onClick={() => {
              props.showProfile(props.row.id);
              props.setClassName("dispaly-show");
            }}
            className="show-profile-btn"
          >
            show profile
          </button>
        </td>
      </tr>
    </tbody>
  );
};
export default Row;
