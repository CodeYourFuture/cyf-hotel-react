import React, { useState } from "react";
import moment from "moment";
import Button from "./Button";

const SearchResultsRow = ({ booking, handleClick }) => {
  const [selected, setSelected] = useState(true);
  const [highlighted, setHighlighted] = useState("");

  let inDate = moment(booking.checkInDate);
  let outDate = moment(booking.checkOutDate);
  let numOfNights = outDate.diff(inDate, "days");

  function selectRow() {
    if (selected) {
      setHighlighted("highlight");
      setSelected(false);
    } else {
      setHighlighted("");
      setSelected(true);
    }
  }

  return (
    <tr onClick={selectRow} className={highlighted}>
      <td>{booking.id}</td>
      <td>{booking.title}</td>
      <td>{booking.firstName}</td>
      <td>{booking.surname}</td>
      <td>{booking.email}</td>
      <td>{booking.roomId}</td>
      <td>{booking.checkInDate}</td>
      <td>{booking.checkOutDate}</td>
      <td>{numOfNights}</td>
      <td>
        <Button
          class="dark btn-sm"
          text="Show profile"
          onclick={handleClick}
          value={booking.id}
        />
      </td>
    </tr>
  );
};

export default SearchResultsRow;
