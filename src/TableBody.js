import React, { Fragment, useState } from "react";
import moment from "moment";

const TableBody = ({ data, color, changeId }) => {
  let [selected, setSelected] = useState("gray");
  let [rowTwo, setRowTwo] = useState("red");

  const isSelected = () => {
    if (selected === "lightGrey") {
      setSelected((selected = "gray"));
    } else {
      setSelected((selected = "lightGrey"));
    }
    console.log(selected);
  };

  return (
    <Fragment>
      {data.map((e, index) => {
        let startDate = e.checkInDate;
        let endDate = e.checkOutDate;

        let dateIn = moment(startDate);
        let dateOut = moment(endDate);
        let numOfDays = dateOut.diff(dateIn, "days");
        return (
          <tr key={index} className={selected} onClick={isSelected}>
            <th scope="row">{e.id}</th>
            <td>{e.title}</td>
            <td>{e.firstName}</td>
            <td>{e.surname}</td>
            <td>{e.email}</td>
            <td>{e.roomId}</td>
            <td key={data.checkInDate}>{e.checkInDate}</td>
            <td key={data.checkOutDate}>{e.checkOutDate}</td>
            <td>{numOfDays}</td>
            <td>
              <button className="btn btn-primary">Show profile</button>
            </td>
          </tr>
        );
      })}
    </Fragment>
  );
};

export default TableBody;
