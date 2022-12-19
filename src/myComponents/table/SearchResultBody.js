import React, { useState } from "react";

import Moment from "moment";

export default function SearchResultBody({ showProfile, item, theme }) {
  const [selected, setSelected] = useState(false);
  let checckDiff = (InDate, OutDate) => {
    const checkInDate = Moment(InDate, "YYYY-MM-DD");
    const checkOutDate = Moment(OutDate, "YYYY-MM-DD");
    const diff = checkOutDate.diff(checkInDate, "days");
    return diff;
  };

  return (
    <tr
      style={{
        backgroundColor: `${selected ? "#f8d7da" : "rgb(238, 238, 238)"}`,
        cursor: "pointer"
        // ...theme,
      }}
      onClick={() => {
        setSelected(prev => !prev);
      }}
    >
      <th scope="row">{item.id}</th>
      <td>{item.title}</td>
      <td>{item.firstName}</td>
      <td>{item.surname}</td>
      <td>{item.email}</td>
      <td>{item.roomId}</td>
      <td>{item.checkInDate}</td>
      <td>{item.checkOutDate}</td>
      <td>{checckDiff(item.checkInDate, item.checkOutDate)}</td>
      <td>
        <button className="btn btn-info" onClick={() => showProfile(item.id)}>
          Show Profile
        </button>
      </td>
    </tr>
  );
}
