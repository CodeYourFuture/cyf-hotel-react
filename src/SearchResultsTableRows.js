import React, { useState } from "react";
import moment from "moment";

const SearchResultsTableRows = props => {
  const [selected, setSelected] = useState("");
  function changeRowClass() {
    setSelected(previousColor => (previousColor ? "" : "selected"));
  }
  function handleClick() {
    props.getProfileId(props.booking.id);
    console.log("button clicked");
  }
  return (
    <tr className={selected} onClick={changeRowClass}>
      <th scope="row">{props.booking.id}</th>
      <td>{props.booking.title}</td>
      <td>{props.booking.firstName}</td>
      <td>{props.booking.surname}</td>
      <td>{props.booking.email}</td>
      <td>{props.booking.roomId}</td>
      <td>{props.booking.checkInDate}</td>
      <td>{props.booking.checkOutDate}</td>
      <td>
        {moment(props.booking.checkOutDate).diff(
          props.booking.checkInDate,
          "days"
        )}
      </td>
      <td>
        <button className="btn btn-primary" onClick={handleClick}>
          Show Profile
        </button>
      </td>
    </tr>
  );
};

export default SearchResultsTableRows;
