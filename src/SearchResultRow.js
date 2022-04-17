import React, { useState } from "react";
import moment from "moment";

function SearchResultRow({
  id,
  title,
  firstName,
  surname,
  email,
  roomId,
  checkInDate,
  checkOutDate,
  changeProfile
}) {
  var admission = moment(checkInDate, "YYYY-MM-DD");
  var discharge = moment(checkOutDate, "YYYY-MM-DD");

  const [selected, setSelected] = useState(true);
  const [className, setClassName] = useState("");

  // when a row is clicked, it first changes the state 'selected'
  //  so that it selects/unselects that row
  //  then adds/removes class 'highlight' accordingly.
  function changeClassName() {
    setSelected(!selected);
    if (selected) {
      setClassName("highlight");
    } else {
      setClassName("");
    }
  }

  return (
    <tr onClick={changeClassName} className={className}>
      <td>{id}</td>
      <td>{title}</td>
      <td>{firstName}</td>
      <td>{surname}</td>
      <td>{email}</td>
      <td>{roomId}</td>
      <td>{checkInDate}</td>
      <td>{checkOutDate}</td>
      <td>{discharge.diff(admission, "days")}</td>
      <td>
        <td>
          <button
            onClick={() => {
              changeProfile(id);
            }}
          >
            Show Profile
          </button>
        </td>{" "}
      </td>
    </tr>
  );
}

export default SearchResultRow;
