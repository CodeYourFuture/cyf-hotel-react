import React, { useState } from "react";
import { Table } from "reactstrap";
import CustomerProfile from "./CustomerProfile";
import Row from "./row";

const SearchResults = ({
  bookings,
  handleSortTable,
  handleSortNumber,
  ascending
}) => {
  const [id, setId] = useState("");
  function showCustomerProfile(element) {
    setId(element._id);
  }

  return (
    <div className="col-12">
      {id === "" ? "" : <CustomerProfile className="col-12" customerId={id} />}
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
              {ascending ? (
                <button className="mb-4 ">Click For Ascending</button>
              ) : (
                <button className="mb-4 ">Click For Descending</button>
              )}
              <p>Title</p>
            </th>
            <th
              onClick={() => handleSortTable("firstName")}
              className={"mx-auto border text-center text-white bg-dark"}
            >
              {ascending ? (
                <button className="mb-4 ">Click For Ascending</button>
              ) : (
                <button className="mb-4 ">Click For Descending</button>
              )}
              <p>First Name</p>
            </th>
            <th
              onClick={() => handleSortTable("surName")}
              className={"mx-auto border text-center text-white bg-dark"}
            >
              {ascending ? (
                <button className="mb-4 ">Click For Ascending</button>
              ) : (
                <button className="mb-4 ">Click For Descending</button>
              )}
              <p>Last Name</p>
            </th>
            <th
              onClick={() => handleSortTable("email")}
              className={"mx-auto border text-center text-white bg-dark"}
            >
              {ascending ? (
                <button className="mb-4 ">Click For Ascending</button>
              ) : (
                <button className="mb-4 ">Click For Descending</button>
              )}
              <p>Email</p>
            </th>
            <th
              onClick={() => handleSortTable("roomId")}
              className={"mx-auto border text-center text-white bg-dark"}
            >
              {ascending ? (
                <button className="mb-4 ">Click For ascending</button>
              ) : (
                <button className="mb-4 ">Click For Descending</button>
              )}
              <p>Room Id</p>
            </th>
            <th
              onClick={() => handleSortNumber("checkIn")}
              className={"mx-auto border text-center text-white bg-dark"}
            >
              {ascending ? (
                <button className="mb-4 ">Click For ascending</button>
              ) : (
                <button className="mb-4 ">Click For Descending</button>
              )}
              <p>Check In Date</p>
            </th>
            <th
              onClick={() => handleSortNumber("checkOut")}
              className={"mx-auto border text-center text-white bg-dark"}
            >
              {ascending ? (
                <button className="mb-4 ">Click For ascending</button>
              ) : (
                <button className="mb-4 ">Click For Descending</button>
              )}
              <p>Check out date</p>
            </th>
            <th
              onClick={() => handleSortNumber("nights")}
              className={"mx-auto border text-center text-white bg-dark"}
            >
              {ascending ? (
                <button className="mb-4 ">Click For ascending</button>
              ) : (
                <button className="mb-4 ">Click For Descending</button>
              )}
              <p>Nights</p>
            </th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((element, index) => {
            return (
              <Row
                element={element}
                key={index}
                index={index}
                showCustomerProfile={showCustomerProfile}
                // className={active}
              />
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default SearchResults;
