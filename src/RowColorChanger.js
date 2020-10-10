import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

function RowColorChanger({ el, customerProfile }) {
  const [click, setClick] = useState("noHighlight");
  const [profile, seProfile] = useState(``);

  function classChanger() {
    if (click === "highlight") {
      setClick("noHighlight");
    } else {
      setClick("highlight");
    }
  }
  /* const onClickFun = () => {
    rowColorChanger(el.id);
  }; */

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
          <button
            className="btn btn-success" /* onClick ={...customerProfile.customerProfile(1)} */
          >
            Show profile
          </button>
        }
      </td>
    </tr>
  );
}

export default RowColorChanger;
