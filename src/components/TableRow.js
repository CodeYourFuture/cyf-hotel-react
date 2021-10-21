import React, { useState } from "react";
import moment from "moment";

const TableRow = prop => {
  const [isSelected, setIsSelected] = useState([]);
  const changeColor = index => {
    if (isSelected.includes(index)) {
      setIsSelected(isSelected.filter(row => row !== index));
    } else setIsSelected(isSelected.concat(index));
  };
  let checkInDate = moment(prop.customer.checkInDate);

  let checkOutDate = moment(prop.customer.checkOutDate);
  let nightStay = checkOutDate.diff(checkInDate, "days");
  return (
    <tr
      // key={index}
      onClick={() => changeColor(prop.index)}
      className={isSelected.includes(prop.index) ? "highlighted" : "primary"}
    >
      <td>{prop.customer.id}</td>
      <td>{prop.customer.title}</td>
      <td>{prop.customer.firstName}</td>
      <td>{prop.customer.surname}</td>
      <td>{prop.customer.email} </td>
      <td>{prop.customer.roomId}</td>
      <td>{prop.customer.checkInDate}</td>
      <td>{prop.customer.checkOutDate}</td>
      <td>{nightStay}</td>
      <td>
        <button onClick={() => prop.handleClick()} type="submit">
          Show Profile{" "}
        </button>
      </td>
    </tr>
  );
};
export default TableRow;
