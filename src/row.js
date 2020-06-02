import React, { useState } from "react";
import moment from "moment";

const Row = ({ element, index }) => {
  const [active, setActiveClass] = useState(false);
  function handleClick() {
    setActiveClass(!active);
  }
  return (
    <tr
      onClick={handleClick}
      key={index}
      className={
        active
          ? "col-12  text-white  bg-success"
          : "col-12 text-dark bg-danger "
      }
    >
      <th>
        <i className={active ? "fas fa-toggle-on" : "fas fa-toggle-off"} />
        {active ? "On" : "Off"}
      </th>
      <th
        scope="row"
        className={
          active
            ? "bg-warning mx-auto text-white"
            : "mx-auto text-white bg-dark"
        }
      >
        {element.title}
      </th>
      <td className={active ? "bg-success text-white" : " text-white "}>
        {element.firstName}
      </td>
      <td
        className={
          active
            ? "bg-warning mx-auto text-white"
            : "mx-auto text-white bg-dark"
        }
      >
        {element.surname}
      </td>
      <td className={active ? "bg-success text-white" : " text-white "}>
        {element.email}
      </td>
      <td
        className={
          active
            ? "bg-warning mx-auto text-white"
            : "mx-auto text-white bg-dark"
        }
      >
        {element.roomId}
      </td>
      <td className={active ? "bg-success text-white" : " text-white "}>
        {element.checkInDate}
      </td>
      <td
        className={
          active
            ? "bg-warning mx-auto text-white"
            : "mx-auto text-white bg-dark"
        }
      >
        {element.checkOutDate}
      </td>
      <td className={active ? "bg-success text-white" : "text-white"}>
        {" "}
        {moment(element.checkOutDate).diff(moment(element.checkInDate), "days")}
      </td>
    </tr>
  );
};

export default Row;
