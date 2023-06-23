import react, { useState } from "react";

function EachRowInSearchResults(props) {
  const [switchMe, setSwitchMe] = useState("off");

  function handleClick() {
    if (switchMe === "off") {
      setSwitchMe("on");
    } else {
      setSwitchMe("off");
    }
  }

  function handleShowProfile() {
    props.setCustomerId(props.booking.id);
    props.setCustomerProfile("Customer Profile");
    if (props.view === "viewOff") {
      props.setView("viewOn");
    } else {
      props.setView("viewOff");
    }
  }

  return (
    <tr className={switchMe} onClick={handleClick}>
      <th scope="row">{props.booking.id}</th>
      <td>{props.booking.title}</td>
      <td>{props.booking.firstName}</td>
      <td>{props.booking.surname}</td>
      <td>{props.booking.email}</td>
      <td>{props.booking.roomId}</td>
      <td>{props.booking.checkInDate}</td>
      <td>{props.booking.checkOutDate}</td>
      <td>{props.numberOfNights}</td>
      <td>
        <button onClick={handleShowProfile} className="btn btn-primary">
          Show Profile
        </button>
      </td>
    </tr>
  );
}

export default EachRowInSearchResults;
