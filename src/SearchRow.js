import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";

const SearchRow = (props)=> {
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


  // const [colour, setColour] = useState("");
  // function NewColor() {
  //   setColour(colour ? "" : "newTrColor");
  // }

  // const [showCustomerProfile, setShowProfile] = useState(false);
  // function profileHandler() {
  //   setShowProfile((showProfile) => !showProfile);
  // }

  // return (
  //   <>
  //     <tr className={colour} onClick={NewColor}>
  //       <td scope="row">{props.guest.id}</td>
  //       <td>{props.guest.title}</td>
  //       <td>{props.guest.firstName}</td>
  //       <td>{props.guest.surname}</td>
  //       <td>{props.guest.email}</td>
  //       <td>{props.guest.roomId}</td>
  //       <td>{props.guest.checkInDate}</td>
  //       <td>{props.guest.checkOutDate}</td>
  //       <td>
  //         {" "}
  //         {moment(props.guest.checkOutDate).diff(
  //           moment(props.guest.checkInDate),
  //           "days"
  //         )}
  //       </td>
  //       <td>
  //         <button className="button-pointer" onClick={profileHandler}>
  //           {showCustomerProfile ? "Hide Profile" : "Show Profile"}
  //         </button>
  //       </td>
  //     </tr>
  //     <td colSpan={5}>
  //       {showCustomerProfile && <CustomerProfile id={props.guest.id} />}
  //     </td>
  //   </>
  // );
}

export default SearchRow;
