import React, { useState } from "react";
import moment from "moment";

const Row = ({ data, setIsShow }) => {
  const [selectedRow, setSelectedRow] = useState(false);
  const checkIn = moment(data.checkInDate);
  const checkOut = moment(data.checkOutDate);
  return (
    <tr
      key={data.id}
      className={selectedRow ? "select" : ""}
      onClick={() => {
        setSelectedRow(!selectedRow);
      }}
    >
      <th scope="row">{data.id}</th>
      <td>{data.title}</td>
      <td>{data.firstName}</td>
      <td>{data.surname}</td>
      <td>{data.email}</td>
      <td>{data.roomId}</td>
      <td>{data.checkInDate}</td>
      <td>{data.checkOutDate}</td>
      <td className="booking-days">{checkOut.diff(checkIn, "days")}</td>
      <td className="show-profile">
        <button
          key={data.id}
          onClick={() => {
            console.log(data.id);
            setIsShow(data.id);
          }}
        >
          Show profile
        </button>
      </td>
    </tr>
  );
};

export default Row;
