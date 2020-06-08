import React, { useState } from "react";
import moment from "moment";

const BookingRows = ({ element, index }) => {
  const [rowsState, setRowsState] = useState(false);
  const changeRowState = () => {
    setRowsState(!rowsState);
  };
  return (
    <tr
      key={index}
      onClick={changeRowState}
      className={rowsState ? "Table_TD_HighLight_CSS" : "Table_TD_CSS"}
    >
      <th scope="row" className="Table_TD_CSS">
        {element.title}
      </th>
      <td className="Table_TD_CSS">{element.firstName}</td>
      <td className="Table_TD_CSS">{element.surname}</td>
      <td className="Table_TD_CSS">{element.email}</td>
      <td className="Table_TD_CSS">{element.roomId}</td>
      <td className="Table_TD_CSS">{element.checkInDate}</td>
      <td className="Table_TD_CSS">{element.checkOutDate}</td>
      <td className="Table_TD_CSS">
        {moment(element.checkOutDate).diff(moment(element.checkInDate), "days")}
      </td>
    </tr>
  );
};

export default BookingRows;
