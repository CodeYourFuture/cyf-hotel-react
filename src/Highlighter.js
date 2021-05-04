import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

const HighlighterIndividualRow = ({ item, getCustomerId }) => {
  // console.log(item);
  const [highlight, setHighlight] = useState("highlightNon");
  function newHighlight() {
    if (highlight === "highlighted") {
      setHighlight("highlightNon");
    } else {
      setHighlight("highlighted");
    }
  }

  const a = moment(item.checkOutDate);
  // console.log(item.checkOutDate);
  const b = moment(item.checkInDate);

  return (
    <tr className={highlight} onClick={newHighlight}>
      <th>{item.id}</th>
      <th>{item.title}</th>
      <th>{item.firstName}</th>
      <th>{item.surname}</th>
      <th>{item.email}</th>
      <th>{item.roomId}</th>
      <th>{item.checkInDate}</th>
      <th>{item.checkOutDate}</th>
      <th>{a.diff(b, "day")}</th>
      <th>
        <button
          className="btn btn-success"
          onClick={() => getCustomerId(item.id)}
        >
          Show profile
        </button>
      </th>
    </tr>
  );
};

export default HighlighterIndividualRow;
