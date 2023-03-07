import React, { useState } from "react";

const SearchResult = props => {
  const [customClass, setCustomClass] = useState("");

  const classToggle = () => {
    setCustomClass(customClass => (customClass ? "" : "table-primary"));
  };

  const showCustomerProfile = event => {
    event.stopPropagation();
    // to stop it highlighting the row when the Show Profile button is clicked
    props.setCustomerId(() => {
      return props.id;
    });
    // ^ this is the set state function from 2 levels above in Bookings.js
  };

  return (
    <>
      <tr className={`text-center ${customClass}`} onClick={classToggle}>
        <th scope="row">{props.id}</th>
        <td>{props.title}</td>
        <td>{props.firstName}</td>
        <td>{props.surname}</td>
        <td>{props.email}</td>
        <td>{props.roomId}</td>
        <td>{props.checkInDate}</td>
        <td>{props.checkOutDate}</td>
        <td>{props.diff}</td>
        <td>
          <button
            className="btn-primary"
            onClick={showCustomerProfile}
            id={props.id}
          >
            Show Profile
          </button>
        </td>
      </tr>
    </>
  );
};

export default SearchResult;
