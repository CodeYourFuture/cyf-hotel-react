import React from "react";
import moment from "moment";
import { useState } from "react";
// import FakeBookings from "./data/fakeBookings.json";
const SearchResults = props => {
  const colTable = [
    "Id",
    "Title",
    "First name",
    "Surname",
    "Surname",
    "Room Id",
    "Check in Date",
    "Check out Date",
    "number of nights"
  ];
  const moment = require("moment");
  const rowNum = props.FakeBookings.length;
  let classRows = [];
  for (let i = 0; i < rowNum; i++) {
    classRows.push("unselectedColor");
  }
  const [colorRow, setColorRow] = useState(classRows);
  const updateClassName = index => {
    // const index = 2;
    const newClassArray = [...colorRow];
    if (colorRow[index] != "unselectedColor") {
      newClassArray[index] = "unselectedColor";
    } else {
      newClassArray[index] = "selectedColor";
    }
    setColorRow(newClassArray);
  };
  return (
    <table className="table ">
      <thead>
        <tr>
          {colTable.map(titleComponent => (
            <th scope="col">{titleComponent}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.FakeBookings.map((individualBookingInfo, index) => (
          <tr
            className={colorRow[index]}
            onClick={updateClassName.bind(this, index)}
          >
            {Object.values(individualBookingInfo).map(rowEntry => (
              <td>{rowEntry}</td>
            ))}
            {/* <td>{individualBookingInfo.id}</td>
            <td>{individualBookingInfo.title}</td>
            <td>{individualBookingInfo.firstName}</td>
            <td>{individualBookingInfo.surname}</td>
            <td>{individualBookingInfo.email}</td>
            <td>{individualBookingInfo.roomId}</td>
            <td>{individualBookingInfo.checkInDate}</td>
            <td>{individualBookingInfo.checkOutDate}</td> */}
            <td>
              {Math.floor(
                (moment(individualBookingInfo.checkOutDate) -
                  moment(individualBookingInfo.checkInDate)) /
                  (1000 * 60 * 60 * 24)
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default SearchResults;
