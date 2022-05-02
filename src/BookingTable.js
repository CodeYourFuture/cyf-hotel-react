import React, { useState } from "react";
import moment from "moment";

function BookingTable({ result, setId }) {
  const [selected, setSelected] = useState(false);
  function handlesetId() {
    setId(result.id);
  }
  return (
    <tr
      className={selected ? "table-primary" : " "}
      onClick={() => {
        setSelected(!selected);
      }}
    >
      <th scope="row "> {result.id}</th>
      <td>{result.title}</td>
      <td>{result.firstName}</td>
      <td>{result.surname}</td>
      <td>{result.email}</td>
      <td>{result.roomId}</td>
      <td>{result.checkInDate}</td>
      <td>{result.checkOutDate}</td>
      <td>
        {moment(result.checkOutDate).diff(moment(result.checkInDate), "days")}
      </td>
      <td onClick={e => e.stopPropagation()}>
        <a href="#customerProfile">
          {" "}
          <button
            href="#customerProfile"
            className="app-btn"
            onClick={handlesetId}
          >
            Show profile
          </button>{" "}
        </a>
      </td>
    </tr>
  );
}

export default BookingTable;
