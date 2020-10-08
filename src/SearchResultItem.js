import React, { useState } from "react";
import moment from "moment";
const WHITE = "rgb(255, 255, 255)";
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function getRGB() {
  const r = getRandomInt(255);
  const g = getRandomInt(255);
  const b = getRandomInt(255);
  return `rgb(${r},${g},${b})`;
}
const SearchResultItem = ({
  id,
  title,
  firstName,
  surname,
  email,
  roomId,
  checkInDate,
  checkOutDate
}) => {
  const [color, setColor] = useState(WHITE);
  const selectLine = () => {
    const newColor = getRGB();
    if (color === WHITE) {
      setColor(newColor);
    } else {
      setColor(WHITE);
    }
  };
  return (
    //<tr onClick ={selectLine} style = {{backgroundColor: selected}}>
    <tr onClick={selectLine} style={{ backgroundColor: color }}>
      <th scope="row">{id}</th>
      <td>{title}</td>
      <td>{firstName}</td>
      <td>{surname}</td>
      <td>{email}</td>
      <td>{roomId}</td>
      <td>{checkInDate}</td>
      <td>{checkOutDate}</td>
      <td>{moment(checkOutDate).diff(moment(checkInDate), "days")}</td>
    </tr>
  );
};
export default SearchResultItem;
