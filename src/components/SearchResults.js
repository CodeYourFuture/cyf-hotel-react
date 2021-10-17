import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile.js";

const SearchResults = prop => {
  const customer = prop.results;
  const [isSelected, setIsSelected] = useState([]);

  const [cusid, setCusId] = useState(0);

  const viewProfile = index => {
    setCusId(customer[index].id);
  };

  const changeColor = index => {
    // index = index;

    if (isSelected.includes(index)) {
      setIsSelected(isSelected.filter(row => row !== index));
    } else setIsSelected(isSelected.concat(index));
  };

  return (
    <>
      <table className="table table-responsive table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">RoomId</th>
            <th scope="col">CheckInDate</th>
            <th scope="col">CheckOutDate</th>
            <th scope="col">Nights Stay</th>
            <th scope="col">New Col</th>
          </tr>
        </thead>
        <tbody>
          {customer.map((customer, index) => {
            let checkInDate = moment(customer.checkInDate);

            let checkOutDate = moment(customer.checkOutDate);
            let nightStay = checkOutDate.diff(checkInDate, "days");
            return (
              // <TableRow key={index} customerdata={customer} class={index} />
              <tr
                key={index}
                onClick={() => changeColor(index)}
                className={
                  isSelected.includes(index) ? "highlighted1" : "primary"
                }
              >
                <td>{customer.id}</td>
                <td>{customer.title}</td>
                <td>{customer.firstName}</td>
                <td>{customer.surname}</td>
                <td>{customer.email} </td>
                <td>{customer.roomId}</td>
                <td>{customer.checkInDate}</td>
                <td>{customer.checkOutDate}</td>
                <td>{nightStay}</td>
                <td>
                  <button onClick={() => viewProfile(index)} type="submit">
                    Show Profile{" "}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <CustomerProfile id={cusid} />
    </>
  );
};

export default SearchResults;
