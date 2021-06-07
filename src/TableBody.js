import React from "react";
import moment from "moment";
moment().format();

const TableBody = props => {
  console.log("This is props", props.Body);
  let dataArr = props.Body;

  return dataArr.map((data, index) => {
    let dateLeaving = moment(data.checkOutDate);
    let dateArriving = moment(data.checkInDate);
    const highlight = (domElement)=>{
      console.log("This function works");
    }

    return (
      <tr key={index} id={`body-row-${index}`} onClick={()=>highlight()}>
        <th>{data.id}</th>
        <td>{data.title}</td>
        <td>{data.firstName}</td>
        <td>{data.surname}</td>
        <td>{data.email}</td>
        <td>{data.roomId}</td>
        <td>{data.checkInDate}</td>
        <td>{data.checkOutDate}</td>
        <td>{dateLeaving.diff(dateArriving, "days")}</td>
      </tr>
    );
  });
};

export default TableBody;
