import React, { useState } from "react";
import moment from "moment";

const SearchResultsRow = (props) => {
  const [isActive, setIsActive] = useState(false);
  function highlightSelectedRow() {
    if (isActive === true) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  }
  const CountNumberOfNights = (checkInDate, checkOutDate) => {
    let a = moment(checkInDate);
    let b = moment(checkOutDate);
    return b.diff(a, "days");
  };

  console.log(props.booking);
  return (
    <tr
      key={props.booking.id}
      onClick={() => highlightSelectedRow()}
      className={isActive === true ? "highlighted" : ""}
    >
      <td>{props.booking.title}</td>
      <td>{props.booking.firstName}</td>
      <td>{props.booking.surname}</td>
      <td>{props.booking.email}</td>
      <td>{props.booking.id}</td>
      <td>{props.booking.checkInDate}</td>
      <td>{props.booking.checkOutDate}</td>
      <td>
        {CountNumberOfNights(
          props.booking.checkInDate,
          props.booking.checkOutDate
        )}
      </td>
      <td>
        <button
          className="btn btn-primary"
          onClick={() => {
            handleClickOnShowProfile(props.booking.id);
          }}
        >
          Show profile
        </button>
      </td>
    </tr>
  );
};

export default SearchResultsRow;
