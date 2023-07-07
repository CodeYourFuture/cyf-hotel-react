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
// located in the same directory. The SearchResult component is defined as an arrow function that accepts props as a parameter.
// Inside the function, two pieces of state are declared using the useState hook: customClass and showCustomerProfile. The
// customClass state is used to toggle the CSS class applied to the row, adding or removing the "table-primary" class. The
// showCustomerProfile state is used to toggle the visibility of the customer's profile. The classToggle function is called
// when the row is clicked and toggles the value of customClass, updating the row's class name accordingly. The
// toggleCustomerProfile function is called when the "Show Profile" or "Hide Profile" button is clicked. It stops the
// event propagation to prevent the row click event from firing and toggles the value of showCustomerProfile. The JSX
// code represents the table row (tr) containing customer information. The row has a dynamic class name that includes
// the customClass state value to apply conditional styling. The customer information is displayed in table cells
// (th and td) using the provided props.
// The button toggles the customer profile visibility when clicked. Its label is "Show Profile" or "Hide Profile" depending
// on the showCustomerProfile state. After the customer information row, another row is rendered with a single table cell
// (td) that spans across all columns (colSpan={10}). This row displays the CustomerProfile component when showCustomerProfile
// is true.
