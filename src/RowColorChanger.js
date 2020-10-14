import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

function RowColorChanger({ el, costomerId }) {
  const [click, setClick] = useState("noHighlight");

  function classChanger() {
    if (click === "highlight") {
      setClick("noHighlight");
    } else {
      setClick("highlight");
    }
  }

  return (
    <tr onClick={classChanger} className={click}>
      <th scope="row">{el.id}</th>
      <td>{el.title}</td>
      <td>{el.firstName}</td>
      <td>{el.surname}</td>
      <td>{el.email}</td>
      <td>{el.roomId}</td>
      <td>{el.checkInDate}</td>
      <td>{el.checkOutDate}</td>
      <td>{moment(el.checkOutDate).diff(moment(el.checkInDate), "days")}</td>
      <td>
        {
          <button className="btn btn-success" onClick={() => costomerId(el.id)}>
            Show profile
          </button>
        }
      </td>
    </tr>
  );
}

export default RowColorChanger;
