import { useState } from "react";
import moment from "moment";
const TableInfo = (props) => {
  return (
    <tbody>
      {props.results.map((data) => {
        const [active, setActive] = useState(false);

        function handleClick() {
          setActive(!active);
        }
        return (
          <tr
            onClick={handleClick}
            style={{ backgroundColor: active ? "beige" : "white" }}
          >
            <td>{data.id}</td>
            <td>{data.title}</td>
            <td>{data.firstName}</td>
            <td>{data.surname}</td>
            <td>{data.email}</td>
            <td>{data.roomId}</td>
            <td>{data.checkInDate}</td>
            <td>{data.checkOutDate}</td>
            <td>{moment(data.checkOutDate).diff(data.checkInDate, "days")}</td>
          </tr>
        );
      })}
    </tbody>
  );
};
export default TableInfo;
