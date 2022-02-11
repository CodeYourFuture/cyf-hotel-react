import React from "react";
import { useState } from "react";
import moment from "moment";

const Row = ({ results, clickEvent }) => {
  const [clicked, setClicked] = useState(null);

  const toggleClass = () => {
    clicked === results.id ? setClicked(null) : setClicked(results.id);
  };

  return (
    <tr
      key={results.id}
      id={results.id}
      className={clicked === results.id ? "highlight" : ""}
      onClick={() => toggleClass(results)}
    >
      <td>{results.title}</td>
      <td>{results.firstName}</td>
      <td>{results.surname}</td>
      <td>{results.email}</td>
      <td>{results.roomId}</td>
      <td>{results.checkInDate}</td>
      <td>{results.checkOutDate}</td>
      <td>
        {moment(results.checkOutDate).diff(moment(results.checkInDate), "days")}
      </td>
      <td>
        <button
          className="btn btn-primary"
          onClick={i => {
            i.stopPropagation();
            clickEvent(results.id);
          }}
        >
          Show Profile
        </button>
      </td>
    </tr>
  );
};
export default Row;
