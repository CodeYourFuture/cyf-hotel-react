import { useState } from "react";
import moment from "moment";
const TableInfo = (props) => {
  const [active, setActive] = useState(false);

  function handleClick() {
    setActive(!active);
  }

  return (
    <>
      <tr
        onClick={handleClick}
        style={{ backgroundColor: active ? "beige" : "white" }}
      >
        <td>{props.result.id}</td>
        <td>{props.result.title}</td>
        <td>{props.result.firstName}</td>
        <td>{props.result.surname}</td>
        <td>{props.result.email}</td>
        <td>{props.result.roomId}</td>
        <td>{props.result.checkInDate}</td>
        <td>{props.result.checkOutDate}</td>
        <td>
          {moment(props.result.checkOutDate).diff(
            props.result.checkInDate,
            "days"
          )}
        </td>
        <button onClick={() => props.idCheck(props.result.id)}>
          Show profile
        </button>
      </tr>
    </>
  );
};
export default TableInfo;
