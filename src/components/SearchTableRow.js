import React, { useState } from "react";
import moment from "moment";
import "./SearchTableRow.css";
import CustomerProfile from "./CustomerProfile";

const SearchTableRow = ({ booking }) => {
  const [selectedRow, setSelectedRow] = useState(false);

  function rowSelected() {
    setSelectedRow(!selectedRow);
  }

  return (
    <tr className={selectedRow ? "selectedRow" : " "} onClick={rowSelected}>
      <th scope="row">{booking.id}</th>
      <td>
        <CustomerProfile bookingID={booking.id} />
      </td>
      <td>{booking.title}</td>
      <td>{booking.firstName}</td>
      <td>{booking.surname}</td>
      <td>{booking.email}</td>
      <td>{booking.roomId}</td>
      <td>{booking.checkInDate}</td>
      <td>{booking.checkOutDate}</td>
      <td>{moment(booking.checkOutDate).diff(booking.checkInDate, "days")}</td>
    </tr>
  );
};

export default SearchTableRow;

/* THIS IS FOR MY OWN FUTURE REFERENCE

OPTION FOR HIGHLIGHTING ONLY ONE ROW WHEN THE THEAD AND TBODY ARE ON THE SAME FILE

const [selectedRow, setSelectedRow] = useState(-1);
function rowSelected(index) {
  if (index !== selectedRow) {
    setSelectedRow(index);
  } else {
    setSelectedRow(-1);
  }
}
*/
