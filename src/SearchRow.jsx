import React, { useState } from "react";
import moment from "moment";

const SearchRow = props => {
  const [selected, setSelected] = useState(true);
  const [highlighted, setHighlighted] = useState("");
  function handleClick() {
    if (selected) {
      setHighlighted("highlighted");
      setSelected(false);
    } else {
      setHighlighted("");
      setSelected(true);
    }
  }
  return (
    <tr onClick={handleClick} className={highlighted}>
      <td>{props.info.title} </td>
      <td>{props.info.firstName}</td>
      <td>{props.info.surname}</td>
      <td>{props.info.email}</td>
      <td>{props.info.roomId}</td>
      <td>{props.info.checkInDate}</td>
      <td>{props.info.checkOutDate}</td>
      <td>
        {moment(props.info.checkOutDate).diff(props.info.checkInDate, "days")}
      </td>
      <td>
        <button
          className="btn btn-primary"
          onClick={props.handleClick}
          id={props.info.id}
        >
          Show Profile
        </button>
      </td>
    </tr>
  );
};
export default SearchRow;
