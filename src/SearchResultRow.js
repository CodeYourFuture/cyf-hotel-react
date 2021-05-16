import React, { useState } from "react";
import moment from "moment";

const SearchResultRow = props => {
  const [color, setColor] = useState(false);

  function highlightRow() {
    setColor(!color);
  }

  const handleCustomersDetail = () => {
    props.selectCustomer(props.person.id);
  };
  return (
    <>
      <tr
        key={props.index}
        onClick={highlightRow}
        className={color ? "gray" : ""}
      >
        <td>{props.person.id}</td>
        <td>{props.person.title}</td>
        <td>{props.person.firstName}</td>
        <td>{props.person.surname}</td>
        <td>{props.person.email}</td>
        <td>{props.person.roomId}</td>
        <td>{props.person.checkInDate}</td>
        <td>{props.person.checkOutDate}</td>
        <td>
          {moment(props.person.checkOutDate).diff(
            props.person.checkInDate,
            "days"
          )}
        </td>
        <td>
          <button
            className="btn btn-secondary m-1"
            onClick={handleCustomersDetail}
          >
            Show Profile
          </button>
        </td>
      </tr>
    </>
  );
};

export default SearchResultRow;
