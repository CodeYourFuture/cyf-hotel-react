import React, { useState } from "react";
import moment from "moment";

const TableBodyRow = ({ content }) => {
  const numberOfNights = moment(content.checkOutDate).diff(
    content.checkInDate,
    "days"
  );

  const [isSelected, setIsSelected] = useState(false);

  function onClickHandler() {
    setIsSelected(!isSelected);
  }

  return (
    <tr
      onClick={onClickHandler}
      style={
        !isSelected ? { backgroundColor: "" } : { backgroundColor: "silver" }
      }
    >
      <th scope="row">{content.id}</th>
      <td>{content.title}</td>
      <td>{content.firstName}</td>
      <td>{content.surname}</td>
      <td>{content.email}</td>
      <td>{content.roomId}</td>
      <td>{content.checkInDate}</td>
      <td>{content.checkOutDate}</td>
      <td>{numberOfNights}</td>
    </tr>
  );
};

export default TableBodyRow;
