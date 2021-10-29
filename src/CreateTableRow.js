import React, { useState } from "react";
import moment from "moment";

const CreateTableRow = props => {
  const [bgColor, setBgColor] = useState(false);
  function Highlighter() {
    setBgColor(!bgColor);
  }

  return (
    <tr className={bgColor ? "bg-success" : ""} onClick={Highlighter}>
      <td>{props.data.id}</td>
      <td>{props.data.title}</td>
      <td>{props.data.firstName}</td>
      <td>{props.data.surname}</td>
      <td>{props.data.email}</td>
      <td>{props.data.roomId}</td>
      <td>{props.data.checkInDate}</td>
      <td>{props.data.checkOutDate}</td>
      <td>
        {moment(props.data.checkOutDate).diff(
          moment(props.data.checkInDate),
          "days"
        )}
      </td>
      <td>
        <button id="profile-button" className="btn btn-primary">
          Show Profile
        </button>
      </td>
    </tr>
  );
};
export default CreateTableRow;
