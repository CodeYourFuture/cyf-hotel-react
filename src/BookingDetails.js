import React from "react";
import Highlight from "./Highlight.js";
import moment from "moment";

function BookingDetails({ info, row, setRow, profileClick }) {
  function handleClick(e) {
    let rowId = parseInt(e.target.parentElement.id);
    let selectedRowClassList = e.target.parentElement.classList.value;
    if (selectedRowClassList.includes("highlight-row")) {
      let rowCopy = [...row];
      rowCopy.map(row => {
        if (row.guestId === rowId) {
          return (row.activeRow = false);
        } else {
          return row;
        }
      });
      setRow(rowCopy);
    } else if (selectedRowClassList.includes("no-highlight")) {
      let rowCopy = [...row];
      rowCopy.map(row => {
        if (row.guestId === rowId) {
          return (row.activeRow = true);
        } else {
          return row;
        }
      });
      setRow(rowCopy);
    } else {
      setRow(prevRow => [...prevRow, { guestId: rowId, activeRow: true }]);
    }
  }
  const {
    id,
    title,
    firstName,
    surname,
    email,
    roomId,
    checkInDate,
    checkOutDate
  } = info;
  let startDate = moment([checkInDate], "YYYY-MM-DD");
  let endDate = moment([checkOutDate], "YYYY-MM-DD");
  var stayDuration = endDate.diff(startDate, "days");
  return (
    <tr id={id} className={Highlight(id, row)} onClick={handleClick}>
      <td>{title}</td>
      <td>{firstName}</td>
      <td>{surname}</td>
      <td>{email}</td>
      <td>{roomId}</td>
      <td>{checkInDate}</td>
      <td>{checkOutDate}</td>
      <td>{stayDuration}</td>
      <td>
        <button className="btn btn-primary" onClick={profileClick}>
          Show Profile
        </button>
      </td>
    </tr>
  );
}

export default BookingDetails;
