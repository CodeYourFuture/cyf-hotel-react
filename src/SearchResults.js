import React, { useState } from "react";
import { Table } from "reactstrap";
import moment from "moment";

const SearchResults = props => {
  const [active, setActiveClass] = useState(false);
  function handleClick() {
    setActiveClass(!active);
  }
  return (
    <Table className="col-12">
      <thead>
        <tr className="col-12">
          <th className="mx-auto bg-dark text-white">status</th>
          <th className="mx-auto bg-danger text-white">Title</th>
          <th className="mx-auto bg-dark text-white">First Name</th>
          <th className="mx-auto bg-danger text-white pl-2">Last Name</th>
          <th className="mx-auto bg-dark text-white pr-3">Email</th>
          <th className="mx-auto bg-danger text-white pl-1 pr-5">Room id</th>
          <th className="mx-auto bg-dark text-white pl-2">Check in date</th>
          <th className="mx-auto bg-danger text-white pl-2">Check out date</th>
          <th className="mx-auto bg-dark text-white pl-2">Nights</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((element, index) => {
          return (
            <tr
              onClick={handleClick}
              key={index}
              className={
                active
                  ? "col-12 switch-on bg-primary"
                  : "col-12 switch-off bg-secondary "
              }
            >
              <th>{active ? "On" : "Off"}</th>
              <th scope="row" className="bg-dark text-white">
                {element.title}
              </th>
              <td
                className={
                  active ? "switch-on bg-danger text-white" : " switch-off "
                }
              >
                {element.firstName}
              </td>
              <td className="bg-dark text-white">{element.surname}</td>
              <td
                className={
                  active ? "switch-on bg-danger text-white" : " switch-off "
                }
              >
                {element.email}
              </td>
              <td className="bg-dark text-white">{element.roomId}</td>
              <td
                className={
                  active ? "switch-on bg-danger text-white" : " switch-off "
                }
              >
                {element.checkInDate}
              </td>
              <td className="bg-dark text-white">{element.checkOutDate}</td>
              <td
                className={
                  active ? "switch-on bg-danger text-white" : " switch-off "
                }
              >
                {" "}
                {moment(element.checkOutDate).diff(
                  moment(element.checkInDate),
                  "days"
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default SearchResults;
