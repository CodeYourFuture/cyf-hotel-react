import React from "react";
import moment from "moment";
import { useState } from "react";
import CustomerProfile from "./CustomerProfile";

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
  // const [rowsClasses, setRowsClasses] = useState('');
  // setRowsClasses([...new Array(rowNum)].map((elm) => elm="unSelectedColor"));
  const rowsClasses = [
    "unSelectedColor",
    "unSelectedColor",
    "unSelectedColor",
    "unSelectedColor",
    "unSelectedColor"
  ];
  // const rowsClasses = [...new Array(rowNum)].map(() => "unSelectedColor");

  // console.log(rowsClasses);
  const [rowColor, setRowColor] = useState(rowsClasses);
  const [getCustomerId, setGetCustomerId] = useState("");
  const updateClassName = index => {
    rowColor.map((classEachRow, indexTemp) => {
      if (indexTemp !== index) rowColor[indexTemp] = "unSelectedColor";
    });
    if (rowColor[index] != "unSelectedColor") {
      rowColor[index] = "unSelectedColor";
    } else {
      rowColor[index] = "selectedColor";
    }
    setRowColor([...rowColor]);
  };

  return (
    <div>
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
              onClick={() => updateClassName(index)}
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
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => setGetCustomerId(individualBookingInfo.id)}
                >
                  Show profile
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {getCustomerId ? <CustomerProfile id={getCustomerId} /> : null}
    </div>
  );
};
export default SearchResults;
