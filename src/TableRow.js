import React, { useState } from "react";
import moment from "moment";

const TableRow = ({ booking, changeId }) => {
  let [selected, setSelected] = useState("gray");
  const {
    id,
    title,
    firstName,
    surname,
    email,
    roomId,
    checkInDate,
    checkOutDate
  } = booking;

  const numOfDays = (checkInDate, checkOutDate) => {
    const checkIn = moment(checkInDate);
    const checkOut = moment(checkOutDate);
    return checkOut.diff(checkIn, "days");
  };
  const isSelected = () => {
    if (selected === "lightGrey") {
      setSelected((selected = "gray"));
    } else {
      setSelected((selected = "lightGrey"));
    }
    console.log(selected);
  };
  const handleClick = () => {
    changeId(id);
    console.log(id);

    if (id) {
      return console.log("handleClick clicked");
    }
  };

  return (
    <tr className={selected} onClick={isSelected}>
      <th scope="row">{id}</th>
      <td>{title}</td>
      <td>{firstName}</td>
      <td>{surname}</td>
      <td>{email}</td>
      <td>{roomId}</td>
      <td>{checkInDate}</td>
      <td>{checkOutDate}</td>
      <td>{numOfDays(checkInDate, checkOutDate)}</td>
      <td>
        <button className="btn btn-primary" onClick={handleClick}>
          Show profile
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
