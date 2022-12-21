import React, { useState } from "react";

export default function SearchResult({ item, checkDiff, showProfile }) {
  const [select, setSelect] = useState(false);

  function changeSelected() {
    setSelect(!select);
  }

  return (
    <tr
      onClick={changeSelected}
      style={{ backgroundColor: select ? "gray" : "white" }}
    >
      <th scope="row">{item.id}</th>
      <td>{item.title}</td>
      <td>{item.firstName}</td>
      <td>{item.sureName}</td>
      <td>{item.email}</td>
      <td>{item.roomId}</td>
      <td>{item.checkInDate}</td>
      <td>{item.checkOutDate}</td>
      <td>{checkDiff(item.checkInDate, item.checkOutDate)}</td>
      <td>
        <button onClick={() => showProfile(item.id)}>Show Profile</button>
      </td>
    </tr>
  );
}
