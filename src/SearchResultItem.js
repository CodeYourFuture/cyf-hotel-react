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
const SearchResultItem = ({ line, setCustomerId }) => {
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
      <th scope="row">{line.id}</th>
      <td>{line.title}</td>
      <td>{line.firstName}</td>
      <td>{line.surname}</td>
      <td>{line.email}</td>
      <td>{line.roomId}</td>
      <td>{line.checkInDate}</td>
      <td>{line.checkOutDate}</td>
      <td>
        {moment(line.checkOutDate).diff(moment(line.checkInDate), "days")}
      </td>
      <td>
        <button onClick={() => setCustomerId(line.id)}>Show profile</button>
      </td>
    </tr>
  );
};
export default SearchResultItem;
