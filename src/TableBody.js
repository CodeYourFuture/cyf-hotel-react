import React, { Fragment, useState } from "react";
import moment from "moment";

const TableBody = ({ data }) => {
  const [selected, setSelected] = useState(0);

  const isSelected = () => {
    setSelected(selected + 1);
    console.log(selected);
  };
  return (
    <Fragment>
      {data.map(e => {
        let startDate = e.checkInDate;
        let endDate = e.checkOutDate;

        let dateIn = moment(startDate);
        let dateOut = moment(endDate);
        let numOfDays = dateOut.diff(dateIn, "days");
        return (
          <tr onClick={isSelected}>
            <th scope="row">{e.id}</th>
            <td>{e.title}</td>
            <td>{e.firstName}</td>
            <td>{e.surname}</td>
            <td>{e.email}</td>
            <td>{e.roomId}</td>
            <td key={data.checkInDate}>{e.checkInDate}</td>
            <td key={data.checkOutDate}>{e.checkOutDate}</td>
            <td>{numOfDays}</td>
          </tr>
        );
      })}
    </Fragment>
  );
};

export default TableBody;
