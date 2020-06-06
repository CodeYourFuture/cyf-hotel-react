import React, { useState } from "react";
import { Table } from "reactstrap";
import Row from "./row";

const SearchResults = props => {
  const [active, setActiveClass] = useState(false);
  function handleClick() {
    setActiveClass(!active);
  }
  return (
    <Table className="col-12">
      <thead>
        <tr onClick={handleClick} className="col-12">
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
          return <Row element={element} key={index} index={index} />;
        })}
      </tbody>
    </Table>
  );
};

export default SearchResults;
