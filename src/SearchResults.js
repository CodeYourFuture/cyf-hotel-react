import React from "react";
import "./SearchResults.css";
import TableHeading from "./TableHeading";
import TableBody from "./TableBody";

const dummyData = [
  {
    id: 1,
    title: "Mr",
    firstName: "John",
    surname: "Smith",
    email: "johnsmith@doe.com",
    roomId: 2,
    checkInDate: "2022-11-21",
    checkOutDate: "2022-11-23",
  },
  {
    id: 2,
    title: "Doctor",
    firstName: "Sadie",
    surname: "Belgium",
    email: "belgium_sadie@sadia.org",
    roomId: 1,
    checkInDate: "2024-02-15",
    checkOutDate: "2024-02-28",
  },
];

const SearchResults = () => {
  return (
    <table className="table">
      <TableHeading />
      <TableBody bodyData={dummyData} />
    </table>
  );
};

export default SearchResults;
