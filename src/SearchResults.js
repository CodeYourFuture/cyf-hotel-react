import React, { useState } from "react";
import { Table } from "reactstrap";
import CustomerProfile from "./CustomerProfile";
import Row from "./row";

const SearchResults = ({ bookings }) => {
  const [active, setActiveClass] = useState(false);
  const [id, setId] = useState("");
  const [sortedBookings, setSortedBookings] = useState(bookings);
  const [ascending, setAscending] = useState(false);

  function handleClick() {
    setActiveClass(!active);
  }
  function showCustomerProfile(element) {
    setId([element.roomId]);
  }
  function handleSortTable(header) {
    let newSortedBookings = [...sortedBookings];
    if (ascending) {
      newSortedBookings.sort((a, b) =>
        a[header].toLowerCase() > b[header].toLowerCase() ? 1 : -1
      );
    } else {
      newSortedBookings.sort((a, b) =>
        a[header].toLowerCase() < b[header].toLowerCase() ? 1 : -1
      );
    }
    setSortedBookings(newSortedBookings);
    setAscending(!ascending);
  }
  function handleSortNumber(header) {
    let newSortedBookings = [...sortedBookings];
    if (ascending) {
      newSortedBookings.sort((a, b) => (a[header] > b[header] ? 1 : -1));
    } else {
      newSortedBookings.sort((a, b) => (a[header] < b[header] ? 1 : -1));
    }
    setSortedBookings(newSortedBookings);
    setAscending(!ascending);
  }

  return (
    <div className="col-12">
      {id == "" ? "" : <CustomerProfile className="col-12" customerId={id} />}
      <Table className="col-12">
        <thead>
          <tr className="col-12">
            <th className={"mx-auto border text-center text-white bg-dark"}>
              status
            </th>

            <th className={"mx-auto border text-center text-white bg-dark"}>
              Show profile
            </th>

            <th
              onClick={() => handleSortTable("title")}
              className={"mx-auto border text-center text-white bg-dark"}
            >
              <button className="mb-4 ">Sort</button>
              Title
            </th>
            <th
              onClick={() => handleSortTable("firstName")}
              className={"mx-auto border text-center text-white bg-dark"}
            >
              <button className="mb-1 d-flex ml-2 ">Sort</button>
              First Name
            </th>
            <th
              onClick={() => handleSortTable("surname")}
              className={"mx-auto border text-center text-white bg-dark"}
            >
              <button className="mb-1 d-flex ml-2 ">Sort</button>
              Last Name
            </th>
            <th
              onClick={() => handleSortTable("email")}
              className={"mx-auto border text-center text-white bg-dark"}
            >
              <button className="mb-4 d-flex mx-auto">Sort</button>
              Email
            </th>
            <th
              onClick={() => handleSortTable("roomId")}
              className={"mx-auto border text-center text-white bg-dark"}
            >
              <button className="mb-1 d-flex ml-2 ">Sort</button>
              Room id
            </th>
            <th
              onClick={() => handleSortNumber("checkInDate")}
              className={"mx-auto border text-center text-white bg-dark"}
            >
              <button className="mb-1 d-flex ml-2 ">Sort</button>
              Check in date
            </th>
            <th
              onClick={() => handleSortNumber("checkOutDate")}
              className={"mx-auto border text-center text-white bg-dark"}
            >
              <button className="mb-1 d-flex ml-2 ">Sort</button>
              Check out date
            </th>
            <th
              onClick={() => handleSortNumber("nights")}
              className={"mx-auto border text-center text-white bg-dark"}
            >
              <button className="mb-4 d-flex ml-2 ">Sort</button>
              Nights
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedBookings.map((element, index) => {
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
