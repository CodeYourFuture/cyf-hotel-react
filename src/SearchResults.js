import React, { useState } from "react";
import "./Heading.css";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";
import BookingRow from "./BookingRow";

const SearchResults = props => {
  const [customerID, setCustomerID] = useState(0);

  function onHandleClick(id) {
    setCustomerID(id);
  }

  const noOfNights = (checkInDate, checkOutDate) => {
    const m_checkInDate = moment(checkInDate);
    const m_checkOutDate = moment(checkOutDate);
    const days = m_checkOutDate.diff(m_checkInDate, "days");
    return days;
  };

  return (
    <>
      <div className="">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">First Name</th>
              <th scope="col">Surname</th>
              <th scope="col">Email</th>
              <th scope="col">Room ID</th>
              <th scope="col">Check In Date</th>
              <th scope="col">Check Out Date</th>
              <th scope="col">Number OF Nights</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {props.results.map((result, index) => (
              <tr key={index}>
                <td>{result.id}</td>
                <td>{result.title}</td>
                <td>{result.firstName}</td>
                <td>{result.surname}</td>
                <td>{result.email}</td>
                <td>{result.roomId}</td>
                <td>{result.checkInDate}</td>
                <td>{result.checkOutDate}</td>
                <td>
                  {" "}
                  {noOfNights(result.checkInDate, result.checkOutDate)}
                  {/* {moment(result.checkOutDate).diff(
                  moment(result.checkInDate),
                  "days"
                )} */}
                </td>
                <td>
                  <button
                    onClick={() => onHandleClick(result.id)}
                    className="btn btn-primary"
                  >
                    Show profile
                  </button>
                </td>

                {/* <td>{noOfNights(result.checkInDate, result.checkOutDate)}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <CustomerProfile id={customerID} />
        </div>
      </div>
    </>
  );
};

export default SearchResults;
