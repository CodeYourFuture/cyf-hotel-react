import React from "react";
import moment from "moment";

function TableData(props) {
  return (
    <tbody>
      {props.results.map((data, index) => {
        return (
          <tr key={index}>
            <th scope="row" />
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
}
export default TableData;
