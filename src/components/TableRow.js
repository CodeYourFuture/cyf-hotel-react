import React, { useState, useEffect } from "react";
import moment from "moment/moment";
import "./RowBackground.css";

export const TableRow = props => {
  const [dateDiff, setDateDiff] = useState([]);
  const [rowSelection, setRowSelection] = useState(false);

  const rowSelected = () => {
    if (rowSelection === true) {
      return setRowSelection(false);
    } else if (rowSelection === false) {
      return setRowSelection(true);
    }
  };

  const calculation = () => {
    let dateIn = moment(props.eachRow["checkInDate"]);

    let dateOut = moment(props.eachRow["checkOutDate"]);

    let difference = dateOut.diff(dateIn, "days");

    setDateDiff(difference);
  };

  useEffect(() => {
    calculation();
  }, []);

  return (
    <tr onClick={rowSelected} className={rowSelection ? "changeBkg" : ""}>
      <td>{props.eachRow["title"]}</td>
      <td>{props.eachRow["firstName"]}</td>
      <td>{props.eachRow["surname"]}</td>
      <td>{props.eachRow["email"]}</td>
      <td>{props.eachRow["roomId"]}</td>
      <td>{props.eachRow["checkInDate"]}</td>
      <td>{props.eachRow["checkOutDate"]}</td>
      <td>{dateDiff}</td>
      <td>
        <button
          id={props.index}
          className="btn btn-primary"
          onClick={props.onProfileHandler}
        >
          {" "}
          Show Profile{" "}
        </button>
      </td>
    </tr>
  );
};
