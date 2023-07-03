import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";

const SearchResult = (props) => {
  const [customClass, setCustomClass] = useState("");
  const [showCustomerProfile, setShowCustomerProfile] = useState(false);

  const classToggle = () => {
    setCustomClass((customClass) => (customClass ? "" : "table-primary"));
  };

  const toggleCustomerProfile = (event) => {
    event.stopPropagation();
    setShowCustomerProfile((showCustomerProfile) => !showCustomerProfile);
  };

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default SearchResult;

// It is a React component named SearchResult that represents a row in a search result table. It displays information
// about a customer and provides a button to toggle the visibility of the customer's profile. The code imports the React
// library, which is necessary for writing React components. It also imports the useState hook from React, which allows
// managing state within functional components. It imports the CustomerProfile component from a file named CustomerProfile.js
// located in the same directory.
