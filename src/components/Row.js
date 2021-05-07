import React from "react";

const Row = ({ row, setSelectedRow, isSelected, getDuration, showProfile }) => {
  const {
    _id,
    title,
    firstName,
    surname,
    email,
    roomId,
    checkInDate,
    checkOutDate
  } = row;
  return (
    <tbody className="table-body table-striped lg-col-11 col-11">
      <tr
        onClick={() => setSelectedRow(_id)}
        className={isSelected ? "selected-row" : "unselected-row"}
      >
        <td>{title}</td>
        <td>{firstName}</td>
        <td>{surname}</td>
        <td>{email}</td>
        <td>{roomId}</td>
        <td>{checkInDate}</td>
        <td>{checkOutDate}</td>
        <td>{getDuration(checkOutDate, checkInDate)}</td>
        <td>
          <button
            onClick={() => {
              console.log("is _id:", _id);
              showProfile(_id);
            }}
            className="show-profile-btn"
          >
            Show profile
          </button>
        </td>
      </tr>
    </tbody>
  );
};
export default Row;
