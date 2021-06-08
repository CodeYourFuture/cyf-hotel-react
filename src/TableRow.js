import React, { useState } from "react";
import moment from "moment";

const TableRow = ({ index, profile, handleId }) => {
  const [mark, setMark] = useState(false);
  function changeColor() {
    setMark(!mark);
  }
  const checkOut = moment(profile.checkOutDate);
  const checkIn = moment(profile.checkInDate);
  const difference = checkOut.diff(checkIn, "days");
  const handleShowProfile = () => {
    handleId(profile.id);
    console.log(profile.id);
  };
  return (
    <tr className={mark && "marked"} onClick={changeColor}>
      <th scope="col">{profile.id}</th>
      <td scope="col">{profile.title}</td>
      <td scope="col">{profile.firstName}</td>
      <td scope="col">{profile.surname}</td>
      <td scope="col">{profile.email}</td>
      <td scope="col">{profile.roomId}</td>
      <td scope="col">{profile.checkInDate}</td>
      <td scope="col">{profile.checkOutDate}</td>
      <td scope="col">{difference}</td>
      <td>
        <button onClick={handleShowProfile}>Show profile</button>
      </td>
    </tr>
  );
};

export default TableRow;
