import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";

const SearchResult = props => {
  const [customClass, setCustomClass] = useState("");
  const [showCustomerProfile, setShowCustomerProfile] = useState(false);

  const classToggle = () => {
    setCustomClass(customClass => (customClass ? "" : "table-primary"));
  };

  const toggleCustomerProfile = event => {
    event.stopPropagation();
    setShowCustomerProfile(showCustomerProfile => !showCustomerProfile);
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
            className="btn btn-primary"
            onClick={toggleCustomerProfile}
            id={props.id}
          >
            {showCustomerProfile ? "Hide Profile" : "Show Profile"}
          </button>
        </td>
      </tr>
      <tr>
        <td colSpan={10}>
          {showCustomerProfile && <CustomerProfile id={props.id} />}
        </td>
      </tr>
    </>
  );
};

export default SearchResult;
