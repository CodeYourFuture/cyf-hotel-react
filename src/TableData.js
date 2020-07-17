import React from "react";
import moment from "moment";

function TableData(props) {
  return (
    <tbody>
      {props.results.map((item, index) => {
        return (
          <tr key={index}>
            <th scope="row" />
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.firstName}</td>
            <td>{item.surname}</td>
            <td>{item.email}</td>
            <td>{item.roomId}</td>
            <td>{item.checkInDate}</td>
            <td>{item.checkOutDate}</td>
            <td>{moment(item.checkOutDate).diff(item.checkInDate, "days")}</td>
          </tr>
        );
      })}
    </tbody>
  );
}

export default TableData;
