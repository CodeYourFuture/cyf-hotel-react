import React, { useState } from "react";
import Button from "./Button";

const SearchResultsRow = props => {
  const [selected, setSelected] = useState(true);
  const [highlighted, setHighlighted] = useState("");
  let inDate = moment(props.booking.checkInDate);
  let outDate = moment(props.booking.checkOutDate);
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
      <td>{props.booking.id}</td>
      <td>{props.booking.title}</td>
      <td>{props.booking.firstName}</td>
      <td>{props.booking.surname}</td>
      <td>{props.booking.email}</td>
      <td>{props.booking.roomId}</td>
      <td>{props.booking.checkInDate}</td>
      <td>{props.booking.checkOutDate}</td>
      <td>{numOfNights}</td>
      <td>
        <Button
          class="dark btn-sm"
          text="Show profile"
          onclick={props.handleClick}
          value={props.booking.id}
        />
      </td>
    </tr>
  );
};

export default SearchResultsRow;
