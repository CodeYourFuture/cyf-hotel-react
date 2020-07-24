import React, { useState } from "react";
import moment from "moment";

const TableDetails = props => {
  const [isSelected, setIsSelected] = useState([]);
  const setClassName = id => {
    if (!isSelected.includes(id)) {
      setIsSelected(isSelected.concat([id]));
    } else {
      setIsSelected(isSelected.filter(p => p !== id));
    }
  };
  return (
    <tbody>
      {props.results.map((data, index) => {
        return (
          <tr
            key={index}
            onClick={() => setClassName(index)}
            style={
              isSelected.includes(index)
                ? { backgroundColor: "gray" }
                : { backgroundColor: "white" }
            }
          >
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
};

export default TableDetails;
