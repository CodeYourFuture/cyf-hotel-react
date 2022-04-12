import React, { useState } from "react";
import moment from "moment";

function SearchResultRows(props) {
  const [selected, setSelected] = useState(false);

  function isSelected(event) {
    console.log(event.target.value);
    return selected === "red" ? setSelected("") : setSelected("red");
  }

  return (
    <tr onClick={isSelected} className={selected}>
      <th scope="row">{props.booking.id}</th>
      {props.headings.map(heading => {
        if (heading === "id") {
          return null;
        } else if (heading === "numberOfNights") {
          const checkIn = moment(props.booking.checkInDate);
          const checkOut = moment(props.booking.checkOutDate);
          const difference = checkOut.diff(checkIn, "days");
          return <td>{difference}</td>;
        } else if (heading === "profile?") {
          return (
            <button
              className="btn btn-primary"
              onClick={() => {
                props.handleClick(props.booking.id);
              }}
            >
              Show profile
            </button>
          );
        } else {
          return <td>{props.booking[heading]}</td>;
        }
      })}
    </tr>
  );
}

export default SearchResultRows;
