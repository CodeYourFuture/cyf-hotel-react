import React, { useState, useCallback } from "react";
import moment from "moment/moment";

const BookingsRow = (props) => {
  const [isSelected, setIsSelected] = useState(false);

  const calculateNights = useCallback((firstDate, secondDate) => {
    let first = moment(firstDate, "YYYY-MM-DD");
    let second = moment(secondDate, "YYYY-MM-DD");
    return second.diff(first, "days");
  }, []);

  const handleTableRowClick = useCallback(() => {
    setIsSelected((prevState) => !prevState);
  }, []);

  return (
    <tr
      className={isSelected ? "selected-row" : ""}
      onClick={handleTableRowClick}
    >
      <th scope="row">{props.guest.id}</th>
      <td>{props.guest.title}</td>
      <td>{props.guest.firstName}</td>
      <td>{props.guest.surname}</td>
      <td>{props.guest.email}</td>
      <td>{props.guest.roomId}</td>
      <td>{props.guest.checkInDate}</td>
      <td>{props.guest.checkOutDate}</td>
      <td>
        {calculateNights(props.guest.checkInDate, props.guest.checkOutDate)}
      </td>
    </tr>
  );
};

export default BookingsRow;
