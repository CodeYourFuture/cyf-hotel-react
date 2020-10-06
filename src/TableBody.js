import React, { useState } from "react";
import moment from "moment";

let prevRow;

const TableBody = ({ bookingsList, getTheId }) => {
  let titles = Object.keys(bookingsList[0]);

  const [rowSelect, setRowSelect] = useState(true);

  const handleSelectRow = e => {
    if (prevRow) {
      prevRow.classList.remove("table-success");
      if (prevRow.innerHTML === e.currentTarget.innerHTML && rowSelect) {
        setRowSelect(!rowSelect);
        return e.currentTarget.classList.remove("table-success");
      }
    }

    setRowSelect(!rowSelect);
    prevRow = e.currentTarget;
    return e.currentTarget.classList.add("table-success");
  };

  const handleButtonClick = e => {
    getTheId(e.currentTarget.parentNode.parentNode.firstChild.innerHTML.trim());
  };

  return (
    <tbody>
      {bookingsList.map(result => {
        let checkInDate = moment(result.checkInDate);
        let checkOutDate = moment(result.checkOutDate);

        return (
          <tr key={result.id} onClick={handleSelectRow}>
            {titles.map(item => (
              <td key={result[item]}> {result[item]} </td>
            ))}
            <td>{checkOutDate.diff(checkInDate, "days")}</td>
            <td>
              <button onClick={handleButtonClick} className="btn btn-danger">
                Show Profile
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
