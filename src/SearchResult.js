// import React, { useState } from "react";
// import CustomerProfile from "./CustomerProfile";

// const SearchResult = (props) => {
//   const [customClass, setCustomClass] = useState("");
//   const [showCustomerProfile, setShowCustomerProfile] = useState(false);

//   const classToggle = () => {
//     setCustomClass((customClass) => (customClass ? "" : "table-primary"));
//   };

//   const toggleCustomerProfile = (event) => {
//     event.stopPropagation();
//     setShowCustomerProfile((showCustomerProfile) => !showCustomerProfile);
//   };

//   return (
//     <React.Fragment>
//       <tr className={`text-center ${customClass}`} onClick={classToggle}>
//         <th scope="row">{props.id}</th>
//         <td>{props.title}</td>
//         <td>{props.firstName}</td>
//         <td>{props.surname}</td>
//         <td>{props.email}</td>
//         <td>{props.roomId}</td>
//         <td>{props.checkInDate}</td>
//         <td>{props.checkOutDate}</td>
//         <td>{props.diff}</td>
//         <td>
//           <button
//             className="btn btn-primary"
//             onClick={toggleCustomerProfile}
//             id={props.id}
//           >
//             {showCustomerProfile ? "Hide Profile" : "Show Profile"}
//           </button>
//         </td>
//       </tr>
//       <tr>
//         <td colSpan={10}>
//           {showCustomerProfile && <CustomerProfile id={props.id} />}
//         </td>
//       </tr>
//     </React.Fragment>
//   );
// };

// export default SearchResult;

import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";

const SearchResult = (props) => {
  const [customClass, setCustomClass] = useState("");
  const [isCustomerProfileShown, setIsCustomerProfileShown] = useState(false);

  const toggleClass = () => {
    setCustomClass((prevClass) => (prevClass ? "" : "table-primary"));
  };

  const toggleCustomerProfile = (event) => {
    event.stopPropagation();
    setIsCustomerProfileShown((prevShown) => !prevShown);
  };

  const {
    id,
    title,
    firstName,
    surname,
    email,
    roomId,
    checkInDate,
    checkOutDate,
    diff,
  } = props;

  return (
    <>
      <tr className={`text-center ${customClass}`} onClick={toggleClass}>
        <th scope="row">{id}</th>
        <td>{title}</td>
        <td>{firstName}</td>
        <td>{surname}</td>
        <td>{email}</td>
        <td>{roomId}</td>
        <td>{checkInDate}</td>
        <td>{checkOutDate}</td>
        <td>{diff}</td>
        <td>
          <button
            className="btn btn-primary"
            onClick={toggleCustomerProfile}
            id={id}
          >
            {isCustomerProfileShown ? "Hide Profile" : "Show Profile"}
          </button>
        </td>
      </tr>
      {isCustomerProfileShown && (
        <tr>
          <td colSpan={10}>
            <CustomerProfile id={id} />
          </td>
        </tr>
      )}
    </>
  );
};

export default SearchResult;

// It is a a React component called SearchResult that renders a table row (tr) with various columns
// for displaying search results. The component imports the useState hook from React to manage the
// state of two variables: customClass and isCustomerProfileShown. The customClass state variable is
// used to toggle the CSS class table-primary on the table row (tr) when it is clicked. This provides
// visual feedback to the user that the row has been selected. The setCustomClass function is used
// to update the value of customClass based on its previous value. The isCustomerProfileShown state
// variable is used to control the visibility of the CustomerProfile component. When
// isCustomerProfileShown is true, the CustomerProfile component is rendered below the table row
// (tr). When isCustomerProfileShown is false, the CustomerProfile component is not rendered.
// The setIsCustomerProfileShown function is used to update the value of isCustomerProfileShown
// based on its previous value. The component receives several props that are destructured to
// access individual values, such as id, title, firstName, surname, email, roomId, checkInDate,
// checkOutDate, and diff. These props are used to populate the respective columns in the table row.

// The toggleClass function is called when the table row is clicked, toggling the customClass state
// variable between an empty string and "table-primary". This changes the CSS class applied to the
// table row, highlighting or unhighlighting it. The toggleCustomerProfile function is called when
// the "Show Profile" or "Hide Profile" button is clicked. It prevents the click event from
// propagating to the table row, ensuring that clicking the button does not trigger the toggleClass
// function. It toggles the isCustomerProfileShown state variable between true and false, controlling
// the visibility of the CustomerProfile component. The component renders the table row (tr) with
// the columns populated by the destructured props. It also renders the "Show Profile" or "Hide Profile"
// button, which triggers the toggleCustomerProfile function when clicked. The CustomerProfile
// component is conditionally rendered below the table row when isCustomerProfileShown is true.
// It receives the id prop to fetch and display the customer profile information. Finally, the
// SearchResult component is exported as the default export, allowing it to be imported and used in
// other parts of the application.
