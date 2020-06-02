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
          <th
            className={
              active
                ? "bg-warning mx-auto text-white"
                : "mx-auto text-white bg-dark"
            }
          >
            status
          </th>
          <th
            className={
              active
                ? "bg-success mx-auto text-white"
                : "mx-auto text-white bg-danger"
            }
          >
            Title
          </th>
          <th
            className={
              active
                ? "bg-warning mx-auto text-white"
                : "mx-auto text-white bg-dark"
            }
          >
            First Name
          </th>
          <th
            className={
              active
                ? "bg-success mx-auto text-white pl-2"
                : "mx-auto text-white bg-danger pl-2"
            }
          >
            Last Name
          </th>
          <th
            className={
              active
                ? "bg-warning mx-auto text-white pr-3"
                : "mx-auto text-white bg-dark pr-3"
            }
          >
            Email
          </th>
          <th
            className={
              active
                ? "bg-success mx-auto text-white pl-1 pr-5"
                : "mx-auto text-white bg-danger pl-1 pr-5"
            }
          >
            Room id
          </th>
          <th
            className={
              active
                ? "bg-warning mx-auto text-white pr-3"
                : "mx-auto text-white bg-dark pl-2"
            }
          >
            Check in date
          </th>
          <th
            className={
              active
                ? "bg-success mx-auto text-white pl-2"
                : "mx-auto text-white bg-danger pl-2"
            }
          >
            Check out date
          </th>
          <th
            className={
              active
                ? "bg-warning mx-auto text-white pr-3"
                : "mx-auto text-white bg-dark pl-2"
            }
          >
            Nights
          </th>
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
                  ? "col-12  text-white  bg-success"
                  : "col-12 text-dark bg-danger "
              }
            >
              <th>
                <i
                  className={active ? "fas fa-toggle-on" : "fas fa-toggle-off"}
                />
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
