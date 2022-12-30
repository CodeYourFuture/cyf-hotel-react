import React, { useState, useEffect } from "react";
import moment from "moment/moment";
import "./RowBackground.css";

export const TableRows = props => {
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
    let dateIn = props.fakeBookings.map(val => {
      // moment(str, 'YYYY-MM-DD')
      return moment(val["checkInDate"]);
    });
    let dateOut = props.fakeBookings.map(val => {
      // moment(str, 'YYYY-MM-DD') bu moment metodunun default degeri, kendimiz degistiredebiliriz
      return moment(val["checkOutDate"]);
    });
    let values = [];
    for (let i = 0; i < dateIn.length; i++) {
      let difference = dateIn[i].diff(dateOut[i], "days");
      values.push(difference);
    }
    setDateDiff(values);
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
      <td>{dateDiff[props.index] * -1}</td>
      <td>
        <button
          id={props.index}
          className="btn btn-primary"
          onClick={props.onProfileHandler}
        >
          Show Profile
        </button>
      </td>
    </tr>
  );
};
