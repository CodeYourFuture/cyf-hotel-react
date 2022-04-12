import React, { useState, useEffect } from "react";
import moment from "moment";
import CustomerProfile from "./customerProfile";
import { normalizeUnits } from "moment";

const TableRow = ({ e }) => {
  // above {e}, instead of writing props, we are just defining the variable name directlty using array destructuring

  const [boolean, setBoolean] = useState(false);

  // handle button click
  let handleBtnClick = () => {
    setBoolean(!boolean);
  };

  const [bgColor, changeColor] = useState("bg-info");
  let switchColors = () => {
    if (bgColor === "bg-info") {
      changeColor("bg-warning");
    } else {
      changeColor("bg-info");
    }
  };
  // diff method used to calculate number of days stayed
  let inDate = moment(e.checkInDate);
  let outDate = moment(e.checkOutDate);
  const difference = outDate.diff(inDate, "days"); // takes 2 arguments, last one is for if we want output as days or hour or months

  return (
    <tr className={bgColor} id="row-text" key={e.id} onClick={switchColors}>
      <td>{e.id}</td>
      <td>{e.title}</td>
      <td>{e.firstName}</td>
      <td>{e.surname}</td>
      <td>{e.email}</td>
      <td>{e.roomId}</td>
      <td>{e.checkInDate}</td>
      <td>{e.checkOutDate}</td>
      <td>{difference}</td>
      <td>
        <button className="btn btn-dark text mr-1" onClick={handleBtnClick}>
          Show profile
        </button>
        {boolean && <CustomerProfile id={e.id} />}
      </td>
    </tr>
  );
};

export default TableRow;
