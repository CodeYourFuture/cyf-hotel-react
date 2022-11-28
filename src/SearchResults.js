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
  const rowNum = props.bookingData.length;

  const rowsClasses = [
    "unSelectedColor",
    "unSelectedColor",
    "unSelectedColor",
    "unSelectedColor",
    "unSelectedColor"
  ];
  const [rowColor, setRowColor] = useState(rowsClasses);

  const updateClassName = index => {
    if (rowColor[index] != "unSelectedColor") {
      rowColor[index] = "unSelectedColor";
    } else {
      rowColor[index] = "selectedColor";
    }
    setRowColor([...rowColor]);
  };

  return (
    <table className="table ">
      <thead>
        <tr>
          {colTable.map((titleComponent, index) => (
            <th scope="col" key={index}>
              {titleComponent}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.bookingData.map((individualBookingInfo, index) => (
          <tr
            className={rowColor[index]}
            key={index}
            onClick={updateClassName.bind(this, index)}
          >
            {Object.values(individualBookingInfo).map((rowEntry, index) => (
              <td key={index}>{rowEntry}</td>
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
