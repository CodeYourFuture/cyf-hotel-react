import React, { useState } from "react";
import Moment from "moment";

function CreateTableRow({ profile, index, showProfile }) {
  const [colour, setColor] = useState(false);
  function handleClick() {
    setColor(oldColour => !oldColour);
  }
  return (
    <tr
      key={index}
      // task-15
      onClick={handleClick}
      style={{ backgroundColor: colour ? "yellow" : "white" }}
    >
      <td> {profile.id}</td>
      <td> {profile.title}</td>
      <td> {profile.firstName}</td>
      <td> {profile.surname}</td>
      <td> {profile.email}</td>
      <td> {profile.roomId}</td>
      <td> {profile.checkInDate}</td>
      <td> {profile.checkOutDate}</td>

      <td>
        {" "}
        {Math.abs(
          Moment(profile.checkOutDate).diff(Moment(profile.checkInDate), "days")
        )}
      </td>
      <td>
        <button
          className="btn btn-primary"
          onClick={() => showProfile(profile.id)}
        >
          Show Profile
        </button>
      </td>
    </tr>
  );
}

export default CreateTableRow;
