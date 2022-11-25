import React, { useState } from "react";
import moment from "moment";

const CustomerTable = ({ customerObject }) => {
  const Row = ({ customerInfo }) => {
    console.log(customerInfo);
    let x = customerInfo;
    const [isSelect, setSelected] = useState(false);
    const selectRow = () => {
      setSelected(!isSelect);
    };

    return (
      <tr
        className={isSelect ? "table-primary" : ""}
        onClick={selectRow}
        key={x.id}
      >
        <td>{x.title}</td>
        <td>{x.firstName}</td>
        <td>{x.surname}</td>
        <td>{x.email}</td>
        <td>{x.roomId}</td>
        <td>{x.checkInDate}</td>
        <td>{x.checkOutDate}</td>
        <td>
          {~~moment
            .duration(moment(x.checkOutDate).diff(moment(x.checkInDate)))
            .asDays() + " nights"}
        </td>
      </tr>
    );
  };

  return (
    <div className="table-responsive">
      <p id="result">Results ({customerObject.length} found)</p>

      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Room ID</th>
            <th>Check In</th>
            <th>Check Out</th>
            <th>Duration of Stay</th>
          </tr>
        </thead>
        <tbody>
          <Row customerInfo={customerObject[0]} />
          <Row customerInfo={customerObject[1]} />
          <Row customerInfo={customerObject[2]} />
          <Row customerInfo={customerObject[3]} />
          <Row customerInfo={customerObject[4]} />
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;
