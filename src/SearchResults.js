import React, { useState } from "react";
import { Table } from "reactstrap";
import CustomerProfile from "./CustomerProfile";
import Row from "./row";

const SearchResults = props => {
  const [active, setActiveClass] = useState(false);
  const [id, setId] = useState("");

  function handleClick() {
    setActiveClass(!active);
  }
  function showCustomerProfile(element) {
    setId([element.roomId]);
  }
  return (
    <div className="col-12">
      {id == "" ? "" : <CustomerProfile className="col-12" customerId={id} />}
      <Table className="col-12">
        <tbody>
          <tr className="col-12">
            <th className="mx-auto text-white bg-dark border pl-3 pr-3">
              <button>sort Title</button>
            </th>
            <th className="mx-auto text-white bg-dark border">
              <button>Sort First Name</button>
            </th>
            <th className="mx-auto text-white bg-dark border">
              <button>Sort surname</button>
            </th>
            <th className="mx-auto text-white bg-dark border">
              <button> Sort Email</button>
            </th>
            <th className="mx-auto text-white bg-dark border">
              <button> Sort Room Id</button>
            </th>
            <th className="mx-auto text-white bg-dark border">
              <button> Sort CheckInDate</button>
            </th>
            <th className="mx-auto text-white bg-dark border">
              <button>Sort CheckOutDate</button>
            </th>
            <th className="mx-auto text-white bg-dark border">
              <button>Sort Nights</button>
            </th>
          </tr>
        </tbody>
      </Table>
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
                  ? "bg-warning mx-auto text-white"
                  : "mx-auto text-white bg-dark"
              }
            >
              Show profile
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
              <Row
                element={element}
                key={index}
                index={index}
                showCustomerProfile={showCustomerProfile}
                className={active}
              />
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default SearchResults;
