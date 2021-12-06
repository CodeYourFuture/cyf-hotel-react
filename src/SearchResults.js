import React, { useState } from "react";
import Row from "./Row";

const SearchResults = ({ results, table }) => {
  const [booking, setBooking] = useState(results);
  const [addData, setAddData] = useState({
    id: "",
    title: "",
    firstName: "",
    surname: "",
    email: "",
    checkOutDate: "",
    checkInDate: "",
    roomId: ""
  });
  console.log(addData);
  const addHandler = event => {
    event.preventDefault();
    const inputName = event.target.getAttribute("name");
    const inputValue = event.target.value;
    const addedCustomer = { ...addData };
    addedCustomer[inputName] = inputValue;
    setAddData(addedCustomer);
  };
  const submitHandler = event => {
    event.preventDefault();
    const newBooking = {
      id: addData.id,
      title: addData.title,
      firstName: addData.firstName,
      surname: addData.surname,
      email: addData.email,
      checkOutDate: addData.checkOutDate,
      checkInDate: addData.checkInDate,
      roomId: addData.roomId
    };
    let bookings = [...booking, newBooking];
    setBooking(bookings);
  };
  return (
    <>
      <table className="table thead-dark table-bordered">
        <thead className=" thead-dark ">
          <tr>
            {table.map((element, index) => (
              <th key={index} scope="col">
                {element}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="tbody">
          {results.map((element, index) => {
            return (
              <Row
                key={index}
                Id={element.id}
                Title={element.title}
                FirstName={element.firstName}
                SureName={element.surname}
                Email={element.email}
                CheckOutDate={element.checkOutDate}
                RoomId={element.roomId}
                CheckInDate={element.checkInDate}
              />
            );
          })}
          {booking.map((element, index) => {
            return (
              <Row
                key={index}
                Id={element.id}
                Title={element.title}
                FirstName={element.firstName}
                SureName={element.surname}
                Email={element.email}
                CheckOutDate={element.checkOutDate}
                RoomId={element.roomId}
                CheckInDate={element.checkInDate}
              />
            );
          })}
        </tbody>
      </table>

      <form onSubmit={submitHandler}>
        <h3>Add a booking</h3>
        <input
          type="text"
          name="id"
          required="required"
          placeholder="Enter an id"
          onChange={addHandler}
        />
        <input
          type="text"
          name="title"
          required="required"
          placeholder="Enter a title"
          onChange={addHandler}
        />
        <input
          type="text"
          name="firstName"
          required="required"
          placeholder="Enter a first name"
          onChange={addHandler}
        />
        <input
          type="text"
          name="surname"
          required="required"
          placeholder="Enter a surname"
          onChange={addHandler}
        />
        <input
          type="text"
          name="email"
          required="required"
          placeholder="Enter an email"
          onChange={addHandler}
        />
        <input
          type="date"
          name="checkInDate"
          required="required"
          placeholder="Enter a checkInDate"
          onChange={addHandler}
        />
        <input
          type="date"
          name="checkOutDate"
          required="required"
          onChange={addHandler}
        />
        <input
          type="text"
          name="roomId"
          required="required"
          placeholder="Enter a roomId"
          onChange={addHandler}
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};
export default SearchResults;
