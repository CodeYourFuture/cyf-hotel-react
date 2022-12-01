import React, { useState } from "react";
import moment from "moment";

const BookingRow = ({ result }) => {
  const [rowSelected, setRowSelected] = useState(0);

  function handleRowClick() {
    console.log(rowSelected);
    setRowSelected(!rowSelected);
    console.log(rowSelected);
  }

  return (
    <tr
      onClick={handleRowClick}
      className={rowSelected ? "bg-primary text-white" : ""}
    >
      <td>{result.id}</td>
      <td>{result.title}</td>
      <td>{result.firstName}</td>
      <td>{result.surname}</td>
      <td>{result.email}</td>
      <td>{result.roomId}</td>
      <td>{result.checkInDate}</td>
      <td>{result.checkOutDate}</td>
      <td>
        {moment(result.checkOutDate).diff(moment(result.checkInDate), "days")}
      </td>
      {/* <td>{noOfNights(result.checkInDate, result.checkOutDate)}</td> */}
    </tr>
  );
};

export default BookingRow;
