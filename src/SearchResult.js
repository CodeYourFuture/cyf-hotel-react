import moment from "moment";
import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";
export default function SearchResults({ results }) {
  const [selectedIndex, setSelectedIndex] = useState();
  const [selectedCustomer, setSelectedCustomer] = React.useState(null);
  const handleClick = checkIndex => {
    return selectedIndex === checkIndex
      ? setSelectedIndex(null)
      : setSelectedIndex(checkIndex);
  };
  function handleButtonClick(id) {
    setSelectedCustomer(id);
    console.log(id);
  }
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">No of nights</th>
            <th scope="col">new</th>
          </tr>
        </thead>
        <tbody>
          {results.map((person, index) => {
            return (
              <tr
                key={index}
                onClick={() => handleClick(index)}
                className={selectedIndex === index ? "clicked" : "unclicked"}
              >
                <th scope="row">{person.id}</th>
                <td>{person.title} </td>
                <td>{person.firstName}</td>
                <td>{person.surname}</td>
                <td>{person.email}</td>
                <td>{person.roomId}</td>
                <td>{person.checkInDate}</td>
                <td>{person.checkOutDate}</td>
                <td>
                  {moment(person.checkOutDate).diff(person.checkInDate, "days")}
                </td>
                <button onClick={() => handleButtonClick(person.id)}>
                  Show profile
                </button>
              </tr>
            );
          })}
        </tbody>
      </table>
      {selectedCustomer && <CustomerProfile id={selectedCustomer} />}
    </div>
  );
}
